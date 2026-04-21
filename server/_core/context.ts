import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
// TODO: Re-enable Manus SDK authentication when user auth is needed.
// import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  // TODO: Manus authentication disabled — always returns unauthenticated.
  // let user: User | null = null;
  // try {
  //   user = await sdk.authenticateRequest(opts.req);
  // } catch (error) {
  //   // Authentication is optional for public procedures.
  //   user = null;
  // }

  return {
    req: opts.req,
    res: opts.res,
    user: null,
  };
}
