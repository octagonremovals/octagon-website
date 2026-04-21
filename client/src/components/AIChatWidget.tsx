/*
 * AI CHAT WIDGET — Octagon Removals
 * Floating chat bubble powered by the Octagon AI assistant (Claude via tRPC).
 * Knows all services, areas, pricing, and company info.
 */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, ChevronDown, Phone } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_78581413.png";

const SUGGESTED_QUESTIONS = [
  "How much does a 2-bed move cost?",
  "Do you cover my area?",
  "How quickly can you move me?",
  "Do you offer packing services?",
];

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I'm the Octagon Removals AI assistant. I can give you instant estimates, answer questions about our services, and help you get started. What would you like to know?",
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chatMutation = trpc.ai.chat.useMutation({
    onSuccess: (data) => {
      const reply: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: typeof data.reply === 'string' ? data.reply : String(data.reply),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      if (!open) setHasNewMessage(true);
    },
    onError: () => {
      const errMsg: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "I'm having trouble connecting right now. Please call us on **0208 521 8000** or use the quote form — we respond within 1 hour!",
      };
      setMessages((prev) => [...prev, errMsg]);
      setIsTyping(false);
    },
  });

  useEffect(() => {
    if (open) {
      setHasNewMessage(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    chatMutation.mutate({
      messages: newMessages
        .filter((m) => m.id !== "welcome")
        .slice(-10) // keep last 10 for context window
        .map((m) => ({ role: m.role, content: m.content })),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Render message content with basic markdown (bold, links)
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed z-50 shadow-2xl flex flex-col"
            style={{
              bottom: "90px",
              right: "20px",
              width: "360px",
              maxWidth: "calc(100vw - 40px)",
              height: "520px",
              maxHeight: "calc(100vh - 120px)",
              backgroundColor: "#fff",
              border: "1px solid #e8e4dc",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 shrink-0"
              style={{ backgroundColor: "#0F1923", borderBottom: "1px solid rgba(184,150,12,0.2)" }}>
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0"
                style={{ border: "2px solid #B8960C" }}>
                <img src={LOGO_URL} alt="Octagon" className="w-full h-full object-contain p-1"
                  style={{ backgroundColor: "#fff" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold"
                  style={{ color: "#F5F3EF", fontFamily: "DM Sans, sans-serif" }}>Octagon AI Assistant</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs" style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
                    Online · Typically replies instantly
                  </span>
                </div>
              </div>
              <button onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center transition-colors"
                style={{ color: "rgba(245,243,239,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#F5F3EF"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(245,243,239,0.5)"}>
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: msg.role === "assistant" ? "#0F1923" : "rgba(184,150,12,0.15)",
                      border: msg.role === "assistant" ? "1px solid rgba(184,150,12,0.3)" : "1px solid #B8960C",
                    }}>
                    {msg.role === "assistant"
                      ? <Bot size={14} style={{ color: "#B8960C" }} />
                      : <User size={14} style={{ color: "#B8960C" }} />}
                  </div>
                  {/* Bubble */}
                  <div className="max-w-[80%] px-3 py-2.5 text-sm leading-relaxed"
                    style={{
                      backgroundColor: msg.role === "assistant" ? "#F5F3EF" : "#0F1923",
                      color: msg.role === "assistant" ? "#0F1923" : "#F5F3EF",
                      fontFamily: "DM Sans, sans-serif",
                      border: msg.role === "assistant" ? "1px solid #e8e4dc" : "1px solid rgba(184,150,12,0.2)",
                    }}>
                    {renderContent(msg.content)}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.3)" }}>
                    <Bot size={14} style={{ color: "#B8960C" }} />
                  </div>
                  <div className="px-3 py-3 flex items-center gap-1"
                    style={{ backgroundColor: "#F5F3EF", border: "1px solid #e8e4dc" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#B8960C" }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }} />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions (only at start) */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-col gap-1.5 mt-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button key={q} onClick={() => sendMessage(q)}
                      className="text-left text-xs px-3 py-2 transition-all"
                      style={{
                        border: "1px solid #e8e4dc",
                        color: "#5a6a7a",
                        fontFamily: "DM Sans, sans-serif",
                        backgroundColor: "#fff",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#B8960C";
                        (e.currentTarget as HTMLElement).style.color = "#B8960C";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#e8e4dc";
                        (e.currentTarget as HTMLElement).style.color = "#5a6a7a";
                      }}>
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* CTA Buttons */}
            <div className="px-4 py-2 shrink-0 flex gap-2"
              style={{ borderTop: "1px solid #e8e4dc", backgroundColor: "#F5F3EF" }}>
              <Link href="/get-quote" className="flex-1">
                <span className="btn-gold w-full py-2 text-xs text-center block cursor-pointer">
                  Get a Quote →
                </span>
              </Link>
              <a
                href="tel:02085218000"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold shrink-0 transition-all"
                style={{
                  backgroundColor: "#0F1923",
                  color: "#B8960C",
                  border: "1px solid rgba(184,150,12,0.3)",
                }}
              >
                <Phone size={11} />
                Call Now
              </a>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 shrink-0"
              style={{ borderTop: "1px solid #e8e4dc" }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about your move..."
                className="flex-1 text-sm px-3 py-2 focus:outline-none"
                style={{
                  border: "1px solid #e8e4dc",
                  fontFamily: "DM Sans, sans-serif",
                  color: "#0F1923",
                  backgroundColor: "#fff",
                }}
                disabled={isTyping}
              />
              <button onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 flex items-center justify-center transition-all shrink-0"
                style={{
                  backgroundColor: input.trim() && !isTyping ? "#B8960C" : "#e8e4dc",
                  color: "#fff",
                }}>
                {isTyping ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-50 w-14 h-14 flex items-center justify-center shadow-lg"
        style={{
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0F1923",
          border: "2px solid #B8960C",
        }}
        aria-label="Open AI chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={22} style={{ color: "#B8960C" }} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} style={{ color: "#B8960C" }} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification dot */}
        {hasNewMessage && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#B8960C", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>!</span>
        )}
      </motion.button>
    </>
  );
}
