import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module so tests don't make real HTTP calls
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the LLM module
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [{ message: { content: "Hello! I can help you with your move." } }],
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("leads.submitQuote", () => {
  it("returns success for a valid quote submission", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submitQuote({
      moveType: "House Removal",
      fromPostcode: "SW1A 1AA",
      toPostcode: "E1 6RF",
      name: "John Smith",
      phone: "07700900000",
      email: "john@example.com",
      message: "3-bed house move",
      source: "Homepage Hero Form",
    });
    expect(result.success).toBe(true);
    expect(result.message).toContain("call you");
  });

  it("returns success even when notification fails", async () => {
    const { notifyOwner } = await import("./_core/notification");
    vi.mocked(notifyOwner).mockRejectedValueOnce(new Error("Network error"));

    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submitQuote({
      moveType: "Office Relocation",
      fromPostcode: "EC1A 1BB",
      toPostcode: "W1A 0AX",
      name: "Jane Doe",
      phone: "02085218000",
      email: "jane@company.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.submitQuote({
        moveType: "House Removal",
        fromPostcode: "SW1A 1AA",
        toPostcode: "E1 6RF",
        name: "Test",
        phone: "07700900000",
        email: "not-an-email",
      })
    ).rejects.toThrow();
  });
});

describe("leads.submitContact", () => {
  it("returns success for a valid contact message", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submitContact({
      name: "Alice Brown",
      email: "alice@example.com",
      message: "I'd like to know more about your storage options.",
      subject: "Storage Enquiry",
    });
    expect(result.success).toBe(true);
    expect(result.message).toContain("2 hours");
  });

  it("rejects messages that are too short", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.submitContact({
        name: "Bob",
        email: "bob@example.com",
        message: "Hi",
      })
    ).rejects.toThrow();
  });
});

describe("ai.chat", () => {
  it("returns a reply from the AI assistant", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.ai.chat({
      messages: [{ role: "user", content: "How much does a 2-bed move cost?" }],
    });
    expect(result.reply).toBeTruthy();
    expect(typeof result.reply).toBe("string");
  });

  it("rejects empty message arrays", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.ai.chat({ messages: [] })
    ).rejects.toThrow();
  });
});
