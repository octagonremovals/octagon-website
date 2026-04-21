import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { MessageCircle, X, Send, Loader2, Warehouse } from "lucide-react";

const GOLD = "#B8960C";
const CHARCOAL = "#0F1923";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_GREETING = `Hi! I'm the Octagon Storage Assistant 👋

I can help you with:
- **Storage unit sizes & pricing**
- **How our collection & delivery works**
- **Security & access information**
- **Getting a free storage quote**

What would you like to know?`;

const QUICK_PROMPTS = [
  "What sizes do you offer?",
  "How much does storage cost?",
  "Can you collect my items?",
  "How secure is the facility?",
  "Get a free quote",
];

export default function StorageChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: STORAGE_GREETING },
  ]);
  const [input, setInput] = useState("");
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chatMutation = trpc.ai.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: String(data.reply) },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting. Please call us on **0208 521 8000** or use the quote form on this page.",
        },
      ]);
    },
  });

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatMutation.isPending]);

  const sendMessage = (text: string) => {
    if (!text.trim() || chatMutation.isPending) return;
    setShowQuickPrompts(false);
    const userMsg: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");

    // Send with storage context prefix for first user message
    const apiMessages = updatedMessages
      .filter((m) => m.role === "user" || (m.role === "assistant" && m.content !== STORAGE_GREETING))
      .map((m) => ({ role: m.role, content: m.content }));

    // Inject storage context if this is the first real user message
    const contextualMessages =
      apiMessages.length === 1
        ? [
            {
              role: "user" as const,
              content: `[Context: The user is on the Octagon Removals STORAGE page, asking about storage services specifically.] ${text.trim()}`,
            },
          ]
        : apiMessages;

    chatMutation.mutate({ messages: contextualMessages });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Render message content with basic markdown (bold)
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: GOLD }}
        aria-label="Open storage chat"
      >
        {open ? (
          <X size={22} color={CHARCOAL} />
        ) : (
          <>
            <MessageCircle size={24} color={CHARCOAL} />
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: GOLD }}
            />
          </>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "520px", background: "#fff", border: `1px solid rgba(184,150,12,0.25)` }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0"
          style={{ background: CHARCOAL }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(184,150,12,0.2)" }}
          >
            <Warehouse size={18} style={{ color: GOLD }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold" style={{ color: "#F5F3EF" }}>
              Storage Assistant
            </p>
            <p className="text-xs" style={{ color: "rgba(245,243,239,0.5)" }}>
              Octagon Removals · Typically replies instantly
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={14} style={{ color: "rgba(245,243,239,0.6)" }} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                  style={{ background: "rgba(184,150,12,0.12)" }}
                >
                  <Warehouse size={12} style={{ color: GOLD }} />
                </div>
              )}
              <div
                className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? { background: GOLD, color: CHARCOAL, borderBottomRightRadius: 4 }
                    : { background: "#f4f4f5", color: "#1a1a1a", borderBottomLeftRadius: 4 }
                }
              >
                {renderContent(msg.content)}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {chatMutation.isPending && (
            <div className="flex justify-start">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                style={{ background: "rgba(184,150,12,0.12)" }}
              >
                <Warehouse size={12} style={{ color: GOLD }} />
              </div>
              <div
                className="px-3.5 py-2.5 rounded-2xl flex items-center gap-1"
                style={{ background: "#f4f4f5", borderBottomLeftRadius: 4 }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#aaa", animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#aaa", animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#aaa", animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          {/* Quick prompts */}
          {showQuickPrompts && messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:bg-[#B8960C]/10"
                  style={{ borderColor: "rgba(184,150,12,0.4)", color: CHARCOAL }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-3 py-3 border-t flex-shrink-0"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about storage..."
            disabled={chatMutation.isPending}
            className="flex-1 text-sm px-3 py-2 rounded-full border outline-none transition-all focus:ring-2 focus:ring-[#B8960C]/30 focus:border-[#B8960C] disabled:opacity-50"
            style={{ borderColor: "#e0e0e0", color: CHARCOAL }}
          />
          <button
            type="submit"
            disabled={!input.trim() || chatMutation.isPending}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            style={{ background: GOLD }}
          >
            {chatMutation.isPending ? (
              <Loader2 size={15} color={CHARCOAL} className="animate-spin" />
            ) : (
              <Send size={15} color={CHARCOAL} />
            )}
          </button>
        </form>
      </div>
    </>
  );
}

