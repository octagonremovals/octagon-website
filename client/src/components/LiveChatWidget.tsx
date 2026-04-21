/**
 * LiveChatWidget — Visitor-facing real-time chat widget
 * Connects via Socket.io to the backend for live messaging with Octagon staff.
 * Falls back gracefully if the server is unavailable.
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { MessageCircle, X, Send, Minimize2, ChevronDown, Phone, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id?: number;
  sender: "visitor" | "owner";
  message: string;
  createdAt?: string | Date;
}

type ChatState = "closed" | "intro" | "identifying" | "chatting" | "offline";

const STORAGE_KEY = "octagon_chat_session";
const BRAND_GOLD = "#B8960C";
const BRAND_DARK = "#0F1923";

export default function LiveChatWidget() {
  const [state, setState] = useState<ChatState>("closed");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isOwnerTyping, setIsOwnerTyping] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [minimized, setMinimized] = useState(false);

  // Visitor identification form
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [identifyError, setIdentifyError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Increment unread badge when chat is minimized/closed and new message arrives
  useEffect(() => {
    if (state === "closed" || minimized) {
      // unread count handled by message listener
    }
  }, [state, minimized]);

  const connectSocket = useCallback(() => {
    if (socket?.connected) return;

    setIsConnecting(true);
    const s = io(window.location.origin, {
      path: "/api/socket.io",
      transports: ["websocket", "polling"],
    });

    s.on("connect", () => {
      setIsConnecting(false);
      const stored = localStorage.getItem(STORAGE_KEY);
      const token = stored ? JSON.parse(stored).token : undefined;
      s.emit("visitor:init", {
        sessionToken: token,
        startPage: window.location.pathname,
      });
    });

    s.on("session:ready", (data: { sessionId: number; sessionToken: string; status: string; messages: ChatMessage[] }) => {
      setSessionId(data.sessionId);
      setMessages(data.messages || []);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: data.sessionToken }));

      if (data.messages && data.messages.length > 0) {
        // Resuming existing session
        setState("chatting");
      } else {
        setState("identifying");
      }
    });

    s.on("owner:message", (data: { message: ChatMessage }) => {
      setMessages(prev => [...prev, data.message]);
      setIsOwnerTyping(false);
      if (minimized || state === "closed") {
        setUnreadCount(c => c + 1);
      }
    });

    s.on("owner:typing", () => {
      setIsOwnerTyping(true);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => setIsOwnerTyping(false), 3000);
    });

    s.on("session:closed", (data: { message: string }) => {
      setMessages(prev => [...prev, {
        sender: "owner",
        message: data.message,
        createdAt: new Date(),
      }]);
    });

    s.on("connect_error", () => {
      setIsConnecting(false);
      setState("offline");
    });

    s.on("disconnect", () => {
      setIsConnecting(false);
    });

    setSocket(s);
  }, [socket, minimized, state]);

  const openChat = useCallback(() => {
    setMinimized(false);
    setUnreadCount(0);
    if (state === "closed") {
      setState("intro");
    }
  }, [state]);

  const startChat = useCallback(() => {
    connectSocket();
  }, [connectSocket]);

  const handleIdentify = useCallback(() => {
    if (!visitorName.trim()) {
      setIdentifyError("Please enter your name to start chatting.");
      return;
    }
    setIdentifyError("");

    if (socket) {
      socket.emit("visitor:identify", {
        name: visitorName.trim(),
        email: visitorEmail.trim() || undefined,
        phone: visitorPhone.trim() || undefined,
      });
    }

    // Add a welcome message
    setMessages([{
      sender: "owner",
      message: `Hi ${visitorName.trim()}! 👋 Welcome to Octagon Removals. How can we help you today? We typically reply within a few minutes during business hours (Mon–Fri 8am–6pm, Sat 8am–3pm).`,
      createdAt: new Date(),
    }]);
    setState("chatting");
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [visitorName, visitorEmail, visitorPhone, socket]);

  const sendMessage = useCallback(() => {
    if (!inputText.trim() || !socket || !sessionId || isSending) return;

    const text = inputText.trim();
    setInputText("");
    setIsSending(true);

    // Optimistic update
    const optimistic: ChatMessage = {
      sender: "visitor",
      message: text,
      createdAt: new Date(),
    };
    setMessages(prev => [...prev, optimistic]);

    socket.emit("visitor:message", { text });

    socket.once("message:sent", () => {
      setIsSending(false);
    });

    // Fallback timeout
    setTimeout(() => setIsSending(false), 3000);
  }, [inputText, socket, sessionId, isSending]);

  const handleTyping = useCallback(() => {
    if (socket && sessionId) {
      socket.emit("visitor:typing");
    }
  }, [socket, sessionId]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date?: string | Date) => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {(state === "closed" || minimized) && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={openChat}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white font-semibold text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: BRAND_DARK }}
            aria-label="Open live chat"
          >
            <MessageCircle size={20} style={{ color: BRAND_GOLD }} />
            <span>Live Chat</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#DC2626" }}>
                {unreadCount}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {state !== "closed" && !minimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "520px", backgroundColor: "#fff" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 text-white" style={{ backgroundColor: BRAND_DARK }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND_GOLD }}>
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Octagon Removals</p>
                  <p className="text-xs opacity-75">
                    {isConnecting ? "Connecting..." : state === "chatting" ? "Live Chat" : "Chat with us"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized(true)}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Minimize chat"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  onClick={() => { setState("closed"); socket?.disconnect(); setSocket(null); }}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Intro Screen */}
            {state === "intro" && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BRAND_GOLD}20` }}>
                  <MessageCircle size={32} style={{ color: BRAND_GOLD }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: BRAND_DARK }}>Chat with Our Team</h3>
                  <p className="text-sm text-gray-500 mt-1">Get instant answers about your move. We're available Mon–Fri 8am–6pm, Sat 8am–3pm.</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <button
                    onClick={startChat}
                    disabled={isConnecting}
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BRAND_DARK }}
                  >
                    {isConnecting ? <Loader2 size={16} className="animate-spin" /> : <MessageCircle size={16} />}
                    {isConnecting ? "Connecting..." : "Start Live Chat"}
                  </button>
                  <a
                    href="tel:02085218000"
                    className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90 border"
                    style={{ color: BRAND_DARK, borderColor: BRAND_DARK }}
                  >
                    <Phone size={16} />
                    Call 0208 521 8000
                  </a>
                </div>
              </div>
            )}

            {/* Offline Screen */}
            {state === "offline" && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-4">
                <p className="text-sm text-gray-500">Chat is temporarily unavailable. Please call us directly.</p>
                <a
                  href="tel:02085218000"
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
                  style={{ backgroundColor: BRAND_DARK }}
                >
                  <Phone size={16} />
                  Call 0208 521 8000
                </a>
              </div>
            )}

            {/* Identification Form */}
            {state === "identifying" && (
              <div className="flex-1 flex flex-col p-5 gap-4 overflow-y-auto">
                <p className="text-sm text-gray-600">Please introduce yourself so our team can help you better.</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Your Name *</label>
                    <input
                      type="text"
                      value={visitorName}
                      onChange={e => setVisitorName(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handleIdentify()}
                      placeholder="e.g. John Smith"
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "#E5E7EB" }}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Email (optional)</label>
                    <input
                      type="email"
                      value={visitorEmail}
                      onChange={e => setVisitorEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "#E5E7EB" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone (optional)</label>
                    <input
                      type="tel"
                      value={visitorPhone}
                      onChange={e => setVisitorPhone(e.target.value)}
                      placeholder="07700 000000"
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "#E5E7EB" }}
                    />
                  </div>
                  {identifyError && (
                    <p className="text-xs text-red-500">{identifyError}</p>
                  )}
                  <button
                    onClick={handleIdentify}
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BRAND_DARK }}
                  >
                    Start Chatting
                  </button>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {state === "chatting" && (
              <>
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ backgroundColor: "#F9F9F9" }}>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sender === "visitor" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                          msg.sender === "visitor"
                            ? "text-white rounded-br-sm"
                            : "text-gray-800 rounded-bl-sm"
                        }`}
                        style={{
                          backgroundColor: msg.sender === "visitor" ? BRAND_DARK : "#FFFFFF",
                          boxShadow: msg.sender === "owner" ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
                        }}
                      >
                        <p className="leading-relaxed">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "visitor" ? "text-white/60" : "text-gray-400"}`}>
                          {formatTime(msg.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isOwnerTyping && (
                    <div className="flex justify-start">
                      <div className="px-3 py-2 rounded-2xl rounded-bl-sm bg-white shadow-sm flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="px-3 py-3 bg-white border-t border-gray-100 flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={e => { setInputText(e.target.value); handleTyping(); }}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-xl text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ "--tw-ring-color": BRAND_GOLD } as React.CSSProperties}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputText.trim() || isSending}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-opacity disabled:opacity-40 hover:opacity-90"
                    style={{ backgroundColor: BRAND_DARK }}
                    aria-label="Send message"
                  >
                    {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
