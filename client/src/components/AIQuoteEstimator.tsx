import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, Loader2, Sparkles } from "lucide-react";

/*
  Design: Premium Modern Removals
  Component: AI Quote Estimator — chat interface
  Uses: Built-in Forge API (VITE_FRONTEND_FORGE_API_KEY / VITE_FRONTEND_FORGE_API_URL)
  Purpose: Provide instant ballpark estimates and qualify leads 24/7
*/

interface Message {
  role: "assistant" | "user";
  content: string;
}

const SYSTEM_PROMPT = `You are a friendly and professional quote estimator assistant for Octagon Removals Ltd, a premium removals company based in London, UK. Your job is to help customers get a rough estimate for their move and encourage them to book a free formal survey.

Guidelines:
- Be warm, professional, and concise
- Ask clarifying questions one at a time to understand: property size (bedrooms), moving from/to (postcodes or areas), move date, any special items (piano, antiques), and whether packing is needed
- Provide rough price ranges based on these factors:
  * Studio/1-bed local London move: £300–£500
  * 2-bed local London move: £450–£700
  * 3-bed local London move: £650–£950
  * 4-bed local London move: £900–£1,400
  * Add 20-30% for M25 or longer distances
  * Add £150–£300 for professional packing service
  * Add £200–£400 for piano/specialist items
- Always emphasise these are estimates and a free formal survey will provide a fixed price
- After giving an estimate, encourage them to fill in the quote form or call 0208 521 8000
- Keep responses under 100 words
- Never make up specific prices you're not confident about
- Always mention that Octagon offers fixed prices with no hidden fees`;

export default function AIQuoteEstimator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Octagon's AI assistant 👋 I can give you an instant rough estimate for your move. To start — how many bedrooms does the property you're moving from have?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_FRONTEND_FORGE_API_URL;
      const apiKey = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;

      const response = await fetch(`${apiUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please call us on 0208 521 8000.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now. Please call us on 0208 521 8000 or fill in the quote form and we'll get back to you within 1 hour.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="bg-[#1C2B3A] px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 octagon-clip bg-green-500 flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
        <div>
          <div className="text-white font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
            Octagon AI Assistant
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs">Online — instant estimates</span>
          </div>
        </div>
        <div className="ml-auto">
          <Sparkles size={18} className="text-green-400" />
        </div>
      </div>

      {/* Messages */}
      <div className="h-72 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-[#1C2B3A]"
                    : "bg-green-500"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot size={14} className="text-white" />
                ) : (
                  <User size={14} className="text-white" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-white text-slate-700 shadow-sm border border-slate-100"
                    : "bg-green-500 text-white"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-[#1C2B3A] flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-slate-100">
              <Loader2 size={16} className="text-slate-400 animate-spin" />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer..."
            disabled={loading}
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent disabled:opacity-50"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="w-10 h-10 bg-green-500 hover:bg-green-600 disabled:opacity-40 rounded-xl flex items-center justify-center transition-all"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">
          AI estimates are indicative. A free formal survey provides your fixed price.
        </p>
      </div>
    </div>
  );
}
