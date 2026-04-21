/*
 * LAYOUT GALLERY — Octagon Removals
 * Shows all 12 homepage layout variants as full-width iframe previews.
 * Reviewers can click any area on any layout to leave a pinned comment.
 * All annotations are stored in the database and shown as numbered pins.
 */
import { useState, useRef, useCallback } from "react";
import { trpc } from "@/lib/trpc";
import { MessageSquare, ThumbsUp, ThumbsDown, Minus, X, ChevronDown, ChevronUp, ExternalLink, Pin } from "lucide-react";

// ─── Layout definitions ────────────────────────────────────────────────────
const LAYOUTS = [
  { id: "layout-gfd", label: "GFD — The Signature (Current)", badge: "CURRENT", badgeColor: "#FAB700" },
  { id: "layout-abc", label: "ABC — Combined Classic", badge: "POPULAR", badgeColor: "#2563eb" },
  { id: "layout-a", label: "A — The Architect", badge: null, badgeColor: "" },
  { id: "layout-b", label: "B — The Estate", badge: null, badgeColor: "" },
  { id: "layout-c", label: "C — The Magazine", badge: null, badgeColor: "" },
  { id: "layout-d", label: "D — The Concierge", badge: null, badgeColor: "" },
  { id: "layout-e", label: "E — The Prestige", badge: null, badgeColor: "" },
  { id: "layout-f", label: "F — The Mayfair", badge: null, badgeColor: "" },
  { id: "layout-g", label: "G — The Gallery", badge: null, badgeColor: "" },
  { id: "layout-h", label: "H — The Belgravia", badge: null, badgeColor: "" },
  { id: "layout-i", label: "I — The Kensington", badge: null, badgeColor: "" },
  { id: "layout-j", label: "J — The Chelsea", badge: null, badgeColor: "" },
];

const SENTIMENT_OPTIONS = [
  { value: "positive" as const, icon: ThumbsUp, label: "Love it", color: "#16a34a" },
  { value: "neutral" as const, icon: Minus, label: "Neutral", color: "#6b7280" },
  { value: "negative" as const, icon: ThumbsDown, label: "Needs work", color: "#dc2626" },
];

type Annotation = {
  id: number;
  layoutId: string;
  reviewerName: string;
  comment: string;
  xPercent: number;
  yPercent: number;
  sentiment: "positive" | "negative" | "neutral";
  createdAt: Date;
};

type PendingPin = { x: number; y: number; layoutId: string } | null;

// ─── Annotation Pin component ──────────────────────────────────────────────
const AnnotationPin = ({
  annotation,
  index,
  onDelete,
}: {
  annotation: Annotation;
  index: number;
  onDelete: (id: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const sentimentColor =
    annotation.sentiment === "positive" ? "#16a34a" :
    annotation.sentiment === "negative" ? "#dc2626" : "#6b7280";

  return (
    <div
      style={{
        position: "absolute",
        left: `${annotation.xPercent ?? 0}%`,
        top: `${annotation.yPercent ?? 0}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        style={{
          width: "28px", height: "28px", borderRadius: "50%",
          backgroundColor: sentimentColor,
          color: "#fff", border: "2px solid #fff",
          fontSize: "11px", fontWeight: 700,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
          transition: "transform 0.15s",
        }}
        title={`${annotation.reviewerName}: ${annotation.comment}`}
      >
        {index + 1}
      </button>
      {open && (
        <div
          style={{
            position: "absolute", left: "36px", top: "-8px",
            backgroundColor: "#fff", border: "1px solid #e5e7eb",
            borderRadius: "8px", padding: "12px 14px",
            minWidth: "220px", maxWidth: "280px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            zIndex: 30,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: "13px", color: "#111" }}>{annotation.reviewerName}</div>
              <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: "1px" }}>
                {new Date(annotation.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <button
                onClick={() => onDelete(annotation.id)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: "2px" }}
                title="Delete annotation"
              >
                <X size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: "2px" }}
              >
                <ChevronUp size={14} />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              backgroundColor: annotation.sentiment === "positive" ? "#dcfce7" : annotation.sentiment === "negative" ? "#fee2e2" : "#f3f4f6",
              color: sentimentColor,
              fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "12px",
              marginBottom: "8px",
            }}
          >
            {annotation.sentiment === "positive" ? "👍 Love it" : annotation.sentiment === "negative" ? "👎 Needs work" : "— Neutral"}
          </div>
          <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5, margin: 0 }}>{annotation.comment}</p>
        </div>
      )}
    </div>
  );
};

// ─── Add Annotation Form ───────────────────────────────────────────────────
const AddAnnotationForm = ({
  pending,
  onSubmit,
  onCancel,
}: {
  pending: PendingPin;
  onSubmit: (data: { name: string; comment: string; sentiment: "positive" | "negative" | "neutral" }) => void;
  onCancel: () => void;
}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sentiment, setSentiment] = useState<"positive" | "negative" | "neutral">("neutral");

  if (!pending) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={onCancel}
    >
      <div
        style={{
          backgroundColor: "#fff", borderRadius: "12px", padding: "28px",
          width: "100%", maxWidth: "420px", margin: "0 16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#FAB700", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Pin size={16} color="#161921" />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#111" }}>Leave Feedback</h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>Click anywhere else to cancel</p>
          </div>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Your Name *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Smith"
            autoFocus
            style={{
              width: "100%", padding: "10px 12px", border: "1px solid #d1d5db",
              borderRadius: "6px", fontSize: "14px", outline: "none", boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Your Feedback *</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What do you think about this area? What works, what doesn't?"
            rows={3}
            style={{
              width: "100%", padding: "10px 12px", border: "1px solid #d1d5db",
              borderRadius: "6px", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Sentiment</label>
          <div style={{ display: "flex", gap: "8px" }}>
            {SENTIMENT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSentiment(opt.value)}
                style={{
                  flex: 1, padding: "8px 4px", border: `2px solid ${sentiment === opt.value ? opt.color : "#e5e7eb"}`,
                  borderRadius: "8px", backgroundColor: sentiment === opt.value ? `${opt.color}15` : "#fff",
                  color: sentiment === opt.value ? opt.color : "#6b7280",
                  fontSize: "11px", fontWeight: 600, cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
                  transition: "all 0.15s",
                }}
              >
                <opt.icon size={16} />
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1, padding: "11px", border: "1px solid #d1d5db", borderRadius: "8px",
              backgroundColor: "#fff", color: "#374151", fontSize: "14px", fontWeight: 600, cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!name.trim() || !comment.trim()) return;
              onSubmit({ name: name.trim(), comment: comment.trim(), sentiment });
            }}
            disabled={!name.trim() || !comment.trim()}
            style={{
              flex: 2, padding: "11px", border: "none", borderRadius: "8px",
              backgroundColor: name.trim() && comment.trim() ? "#FAB700" : "#e5e7eb",
              color: name.trim() && comment.trim() ? "#161921" : "#9ca3af",
              fontSize: "14px", fontWeight: 700, cursor: name.trim() && comment.trim() ? "pointer" : "not-allowed",
            }}
          >
            Save Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Single Layout Card ────────────────────────────────────────────────────
const LayoutCard = ({
  layout,
  annotations,
  onAddAnnotation,
  onDeleteAnnotation,
  isAnnotating,
}: {
  layout: typeof LAYOUTS[0];
  annotations: Annotation[];
  onAddAnnotation: (layoutId: string, xPercent: number, yPercent: number) => void;
  onDeleteAnnotation: (id: number) => void;
  isAnnotating: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const myAnnotations = annotations.filter((a) => a.layoutId === layout.id);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isAnnotating) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const xPercent = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      const yPercent = Math.round(((e.clientY - rect.top) / rect.height) * 100);
      onAddAnnotation(layout.id, xPercent, yPercent);
    },
    [isAnnotating, layout.id, onAddAnnotation]
  );

  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
      {/* Card header */}
      <div style={{ padding: "14px 18px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fafafa" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#111" }}>{layout.label}</h3>
          {layout.badge && (
            <span style={{ backgroundColor: layout.badgeColor, color: "#fff", fontSize: "9px", fontWeight: 800, padding: "2px 8px", borderRadius: "12px", letterSpacing: "0.08em" }}>
              {layout.badge}
            </span>
          )}
          {myAnnotations.length > 0 && (
            <span style={{ backgroundColor: "#f3f4f6", color: "#6b7280", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "12px" }}>
              {myAnnotations.length} comment{myAnnotations.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <a
            href={`/${layout.id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#6b7280", textDecoration: "none", padding: "5px 10px", border: "1px solid #e5e7eb", borderRadius: "6px" }}
          >
            <ExternalLink size={12} /> Full screen
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#374151", background: "none", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "5px 10px", cursor: "pointer" }}
          >
            {expanded ? <><ChevronUp size={12} /> Collapse</> : <><ChevronDown size={12} /> Preview</>}
          </button>
        </div>
      </div>

      {/* Preview area */}
      {expanded && (
        <div
          ref={containerRef}
          onClick={handleClick}
          style={{
            position: "relative",
            cursor: isAnnotating ? "crosshair" : "default",
            userSelect: "none",
          }}
        >
          {isAnnotating && (
            <div style={{
              position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)",
              backgroundColor: "#FAB700", color: "#161921", fontSize: "12px", fontWeight: 700,
              padding: "6px 16px", borderRadius: "20px", zIndex: 25, pointerEvents: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}>
              📌 Click anywhere to add a comment
            </div>
          )}
          <iframe
            src={`/${layout.id}`}
            title={layout.label}
            style={{
              width: "100%", height: "700px", border: "none", display: "block",
              pointerEvents: isAnnotating ? "none" : "auto",
            }}
            loading="lazy"
          />
          {/* Annotation pins */}
          {myAnnotations.map((ann, idx) => (
            <AnnotationPin key={ann.id} annotation={ann} index={idx} onDelete={onDeleteAnnotation} />
          ))}
        </div>
      )}

      {/* Annotations summary (always visible if there are any) */}
      {myAnnotations.length > 0 && (
        <div style={{ padding: "12px 18px", borderTop: "1px solid #f3f4f6", backgroundColor: "#fafafa" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            Feedback ({myAnnotations.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {myAnnotations.map((ann, idx) => (
              <div key={ann.id} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <div style={{
                  width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                  backgroundColor: ann.sentiment === "positive" ? "#16a34a" : ann.sentiment === "negative" ? "#dc2626" : "#6b7280",
                  color: "#fff", fontSize: "10px", fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {idx + 1}
                </div>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#111" }}>{ann.reviewerName}: </span>
                  <span style={{ fontSize: "12px", color: "#374151" }}>{ann.comment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Main Gallery Page ─────────────────────────────────────────────────────
export default function LayoutGallery() {
  const [isAnnotating, setIsAnnotating] = useState(false);
  const [pendingPin, setPendingPin] = useState<PendingPin>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: annotations = [], refetch } = trpc.layoutGallery.getAnnotations.useQuery({ layoutId: undefined });

  const addMutation = trpc.layoutGallery.addAnnotation.useMutation({
    onSuccess: () => { refetch(); setPendingPin(null); },
  });

  const deleteMutation = trpc.layoutGallery.deleteAnnotation.useMutation({
    onSuccess: () => refetch(),
  });

  const handleAddAnnotation = useCallback((layoutId: string, xPercent: number, yPercent: number) => {
    setPendingPin({ x: xPercent, y: yPercent, layoutId });
  }, []);

  const handleSubmitAnnotation = useCallback(
    (data: { name: string; comment: string; sentiment: "positive" | "negative" | "neutral" }) => {
      if (!pendingPin) return;
      addMutation.mutate({
        layoutId: pendingPin.layoutId,
        reviewerName: data.name,
        comment: data.comment,
        xPercent: pendingPin.x,
        yPercent: pendingPin.y,
        sentiment: data.sentiment,
      });
    },
    [pendingPin, addMutation]
  );

  const totalAnnotations = annotations.length;
  const positiveCount = annotations.filter((a) => a.sentiment === "positive").length;
  const negativeCount = annotations.filter((a) => a.sentiment === "negative").length;

  // Score each layout by positive - negative
  const layoutScores = LAYOUTS.map((l) => {
    const mine = annotations.filter((a) => a.layoutId === l.id);
    const pos = mine.filter((a) => a.sentiment === "positive").length;
    const neg = mine.filter((a) => a.sentiment === "negative").length;
    return { ...l, score: pos - neg, total: mine.length, pos, neg };
  }).sort((a, b) => b.score - a.score);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", fontFamily: "DM Sans, system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#161921", padding: "24px 32px", borderBottom: "3px solid #FAB700" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ color: "#FAB700", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                Octagon Removals — Internal Review
              </div>
              <h1 style={{ margin: 0, color: "#fff", fontSize: "24px", fontWeight: 800 }}>
                Homepage Layout Gallery
              </h1>
              <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                {LAYOUTS.length} layout variants · Click any preview to expand · Use annotation mode to leave feedback
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {totalAnnotations > 0 && (
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ backgroundColor: "#16a34a", color: "#fff", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px" }}>
                    👍 {positiveCount}
                  </span>
                  <span style={{ backgroundColor: "#dc2626", color: "#fff", fontSize: "12px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px" }}>
                    👎 {negativeCount}
                  </span>
                </div>
              )}
              <button
                onClick={() => setIsAnnotating(!isAnnotating)}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  backgroundColor: isAnnotating ? "#FAB700" : "rgba(255,255,255,0.1)",
                  color: isAnnotating ? "#161921" : "#fff",
                  border: `2px solid ${isAnnotating ? "#FAB700" : "rgba(255,255,255,0.2)"}`,
                  borderRadius: "8px", padding: "10px 20px",
                  fontSize: "13px", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <MessageSquare size={16} />
                {isAnnotating ? "✓ Annotation Mode ON — Click a layout area" : "Add Feedback"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Leaderboard */}
        {totalAnnotations > 0 && (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px", marginBottom: "28px", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <h2 style={{ margin: "0 0 16px", fontSize: "14px", fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              📊 Feedback Leaderboard
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {layoutScores.filter((l) => l.total > 0).map((l, rank) => (
                <div key={l.id} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  backgroundColor: rank === 0 ? "#fffbeb" : "#f9fafb",
                  border: `1px solid ${rank === 0 ? "#FAB700" : "#e5e7eb"}`,
                  borderRadius: "8px", padding: "8px 14px",
                }}>
                  <span style={{ fontSize: "16px" }}>{rank === 0 ? "🥇" : rank === 1 ? "🥈" : rank === 2 ? "🥉" : `#${rank + 1}`}</span>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111" }}>{l.label.split(" — ")[0]}</div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>
                      {l.pos > 0 && <span style={{ color: "#16a34a" }}>👍 {l.pos} </span>}
                      {l.neg > 0 && <span style={{ color: "#dc2626" }}>👎 {l.neg} </span>}
                      {l.total} comment{l.total !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {isAnnotating && (
          <div style={{
            backgroundColor: "#fffbeb", border: "2px solid #FAB700", borderRadius: "10px",
            padding: "14px 20px", marginBottom: "24px",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ fontSize: "24px" }}>📌</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#161921" }}>Annotation mode is active</div>
              <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>
                Expand any layout below, then click on the specific area you want to comment on. A form will appear to capture your feedback.
              </div>
            </div>
            <button
              onClick={() => setIsAnnotating(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Layout cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {LAYOUTS.map((layout) => (
            <LayoutCard
              key={layout.id}
              layout={layout}
              annotations={annotations as Annotation[]}
              onAddAnnotation={handleAddAnnotation}
              onDeleteAnnotation={(id) => deleteMutation.mutate({ id })}
              isAnnotating={isAnnotating}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: "40px", textAlign: "center", color: "#9ca3af", fontSize: "12px" }}>
          Octagon Removals Ltd — Internal Layout Review Tool · {new Date().getFullYear()}
        </div>
      </div>

      {/* Add annotation form modal */}
      {pendingPin && (
        <AddAnnotationForm
          pending={pendingPin}
          onSubmit={handleSubmitAnnotation}
          onCancel={() => setPendingPin(null)}
        />
      )}
    </div>
  );
}
