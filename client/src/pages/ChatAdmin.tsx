/**
 * ChatAdmin — Owner dashboard for managing all live chat conversations
 * Access at /admin/chat
 * Real-time via Socket.io + historical data via tRPC
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { trpc } from "@/lib/trpc";
import {
  MessageCircle, Send, X, RefreshCw, Clock, CheckCheck,
  User, Phone, Mail, Globe, Circle, Loader2, MessageSquare,
  ChevronLeft
} from "lucide-react";
import { Link } from "wouter";

interface ChatMessage {
  id?: number;
  sender: "visitor" | "owner";
  message: string;
  createdAt?: string | Date;
  isRead?: boolean;
}

interface ChatSession {
  id: number;
  sessionToken: string;
  visitorName?: string | null;
  visitorEmail?: string | null;
  visitorPhone?: string | null;
  startPage?: string | null;
  status: "active" | "waiting" | "closed";
  ownerRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BRAND_GOLD = "#B8960C";
const BRAND_DARK = "#0F1923";

function timeAgo(date: Date | string) {
  const d = new Date(date);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return d.toLocaleDateString("en-GB");
}

export default function ChatAdmin() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyText, setReplyText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVisitorTyping, setIsVisitorTyping] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "waiting" | "closed">("all");
  const [isConnected, setIsConnected] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // tRPC queries for initial data load
  const { data: sessionsData, refetch: refetchSessions } = trpc.chat.getSessions.useQuery({ status: statusFilter });
  const { data: messagesData } = trpc.chat.getMessages.useQuery(
    { sessionId: selectedSessionId! },
    { enabled: !!selectedSessionId }
  );

  // Load sessions from tRPC
  useEffect(() => {
    if (sessionsData) {
      setSessions(sessionsData as ChatSession[]);
    }
  }, [sessionsData]);

  // Load messages from tRPC when session selected
  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData as ChatMessage[]);
    }
  }, [messagesData]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Connect Socket.io as owner
  useEffect(() => {
    const s = io(window.location.origin, {
      path: "/api/socket.io",
      transports: ["websocket", "polling"],
    });

    s.on("connect", () => {
      setIsConnected(true);
      s.emit("owner:join");
    });

    s.on("disconnect", () => setIsConnected(false));

    // New session started by visitor
    s.on("owner:new-session", (data: { session: ChatSession }) => {
      setSessions(prev => {
        const exists = prev.find(s => s.id === data.session.id);
        if (exists) return prev.map(s => s.id === data.session.id ? data.session : s);
        return [data.session, ...prev];
      });
    });

    // New message from visitor
    s.on("owner:new-message", (data: { sessionId: number; message: ChatMessage }) => {
      // Update session list to show unread
      setSessions(prev => prev.map(s =>
        s.id === data.sessionId ? { ...s, ownerRead: false, updatedAt: new Date() } : s
      ));

      // Add to messages if this session is open
      setSelectedSessionId(current => {
        if (current === data.sessionId) {
          setMessages(prev => [...prev, data.message]);
          // Mark as read
          s.emit("owner:mark-read", { sessionId: data.sessionId });
        }
        return current;
      });
    });

    // Visitor typing
    s.on("visitor:typing", (data: { sessionId: number }) => {
      setSelectedSessionId(current => {
        if (current === data.sessionId) {
          setIsVisitorTyping(true);
          if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
          typingTimeoutRef.current = setTimeout(() => setIsVisitorTyping(false), 3000);
        }
        return current;
      });
    });

    // Session closed
    s.on("owner:session-closed", (data: { sessionId: number }) => {
      setSessions(prev => prev.map(s =>
        s.id === data.sessionId ? { ...s, status: "closed" as const } : s
      ));
    });

    setSocket(s);
    return () => { s.disconnect(); };
  }, []);

  const selectSession = useCallback((sessionId: number) => {
    setSelectedSessionId(sessionId);
    setIsVisitorTyping(false);
    // Mark as read
    if (socket) {
      socket.emit("owner:mark-read", { sessionId });
    }
    setSessions(prev => prev.map(s =>
      s.id === sessionId ? { ...s, ownerRead: true } : s
    ));
  }, [socket]);

  const sendReply = useCallback(() => {
    if (!replyText.trim() || !socket || !selectedSessionId || isSending) return;
    const text = replyText.trim();
    setReplyText("");
    setIsSending(true);

    socket.emit("owner:reply", { sessionId: selectedSessionId, text });

    socket.once("reply:sent", (data: { message: ChatMessage }) => {
      setMessages(prev => [...prev, data.message]);
      setIsSending(false);
    });

    setTimeout(() => setIsSending(false), 3000);
  }, [replyText, socket, selectedSessionId, isSending]);

  const closeSession = useCallback((sessionId: number) => {
    if (!socket) return;
    if (confirm("Close this chat session? The visitor will be notified.")) {
      socket.emit("owner:close-session", { sessionId });
    }
  }, [socket]);

  const handleOwnerTyping = useCallback(() => {
    if (socket && selectedSessionId) {
      socket.emit("owner:typing", { sessionId: selectedSessionId });
    }
  }, [socket, selectedSessionId]);

  const selectedSession = sessions.find(s => s.id === selectedSessionId);

  const filteredSessions = sessions.filter(s => {
    if (statusFilter === "all") return true;
    return s.status === statusFilter;
  });

  const unreadCount = sessions.filter(s => !s.ownerRead && s.status !== "closed").length;

  const formatTime = (date?: string | Date) => {
    if (!date) return "";
    return new Date(date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F3EF" }}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 text-white shadow-lg" style={{ backgroundColor: BRAND_DARK }}>
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
          </Link>
          <div className="flex items-center gap-2">
            <MessageCircle size={20} style={{ color: BRAND_GOLD }} />
            <span className="font-bold text-lg">Live Chat Admin</span>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#DC2626" }}>
                {unreadCount} new
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-sm">
            <Circle size={8} fill={isConnected ? "#22C55E" : "#EF4444"} color={isConnected ? "#22C55E" : "#EF4444"} />
            <span className="opacity-75">{isConnected ? "Live" : "Offline"}</span>
          </div>
          <button
            onClick={() => refetchSessions()}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 56px)" }}>
        {/* Sidebar — Session List */}
        <div className="w-72 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
          {/* Filter Tabs */}
          <div className="flex border-b border-gray-200 text-xs font-semibold">
            {(["all", "active", "waiting", "closed"] as const).map(f => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`flex-1 py-2.5 capitalize transition-colors ${
                  statusFilter === f ? "text-white" : "text-gray-500 hover:text-gray-700"
                }`}
                style={statusFilter === f ? { backgroundColor: BRAND_DARK } : {}}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Session Items */}
          <div className="flex-1 overflow-y-auto">
            {filteredSessions.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32 text-gray-400 text-sm gap-2">
                <MessageSquare size={24} />
                <span>No conversations yet</span>
              </div>
            ) : (
              filteredSessions.map(session => (
                <button
                  key={session.id}
                  onClick={() => selectSession(session.id)}
                  className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedSessionId === session.id ? "bg-amber-50 border-l-2" : ""
                  }`}
                  style={selectedSessionId === session.id ? { borderLeftColor: BRAND_GOLD } : {}}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                        style={{ backgroundColor: session.status === "active" ? BRAND_DARK : "#9CA3AF" }}>
                        {session.visitorName ? session.visitorName[0].toUpperCase() : "?"}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">
                          {session.visitorName || "Anonymous Visitor"}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{session.startPage || "/"}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs text-gray-400">{timeAgo(session.updatedAt)}</span>
                      {!session.ownerRead && session.status !== "closed" && (
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_GOLD }} />
                      )}
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                      session.status === "active" ? "bg-green-100 text-green-700" :
                      session.status === "waiting" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-500"
                    }`}>
                      {session.status}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        {selectedSession ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: BRAND_DARK }}>
                  {selectedSession.visitorName ? selectedSession.visitorName[0].toUpperCase() : "?"}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">{selectedSession.visitorName || "Anonymous Visitor"}</h2>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {selectedSession.visitorEmail && (
                      <span className="flex items-center gap-1"><Mail size={10} /> {selectedSession.visitorEmail}</span>
                    )}
                    {selectedSession.visitorPhone && (
                      <span className="flex items-center gap-1"><Phone size={10} /> {selectedSession.visitorPhone}</span>
                    )}
                    {selectedSession.startPage && (
                      <span className="flex items-center gap-1"><Globe size={10} /> {selectedSession.startPage}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  selectedSession.status === "active" ? "bg-green-100 text-green-700" :
                  selectedSession.status === "waiting" ? "bg-yellow-100 text-yellow-700" :
                  "bg-gray-100 text-gray-500"
                }`}>
                  {selectedSession.status}
                </span>
                {selectedSession.status !== "closed" && (
                  <button
                    onClick={() => closeSession(selectedSession.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                    title="Close session"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3" style={{ backgroundColor: "#F9F9F9" }}>
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                  <MessageCircle size={32} />
                  <p className="text-sm">No messages yet</p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "owner" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.sender === "owner"
                          ? "text-white rounded-br-sm"
                          : "text-gray-800 bg-white rounded-bl-sm shadow-sm"
                      }`}
                      style={msg.sender === "owner" ? { backgroundColor: BRAND_DARK } : {}}
                    >
                      <p className="leading-relaxed">{msg.message}</p>
                      <div className={`flex items-center gap-1 mt-1 ${msg.sender === "owner" ? "justify-end" : "justify-start"}`}>
                        <span className={`text-xs ${msg.sender === "owner" ? "text-white/60" : "text-gray-400"}`}>
                          {formatTime(msg.createdAt)}
                        </span>
                        {msg.sender === "owner" && msg.isRead && (
                          <CheckCheck size={12} className="text-white/60" />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}

              {isVisitorTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-white shadow-sm flex items-center gap-1">
                    <span className="text-xs text-gray-400 mr-1">{selectedSession.visitorName || "Visitor"} is typing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply Input */}
            {selectedSession.status !== "closed" ? (
              <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
                <input
                  type="text"
                  value={replyText}
                  onChange={e => { setReplyText(e.target.value); handleOwnerTyping(); }}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendReply(); } }}
                  placeholder={`Reply to ${selectedSession.visitorName || "visitor"}...`}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={sendReply}
                  disabled={!replyText.trim() || isSending}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-opacity disabled:opacity-40 hover:opacity-90"
                  style={{ backgroundColor: BRAND_DARK }}
                >
                  {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-400">
                This conversation has been closed.
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3">
            <MessageCircle size={48} style={{ color: BRAND_GOLD, opacity: 0.5 }} />
            <div className="text-center">
              <p className="font-semibold text-gray-600">Select a conversation</p>
              <p className="text-sm mt-1">Choose a chat session from the left to start replying</p>
            </div>
            {!isConnected && (
              <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 text-red-600 text-sm flex items-center gap-2">
                <Circle size={8} fill="#EF4444" color="#EF4444" />
                Not connected to real-time server. Refresh to reconnect.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
