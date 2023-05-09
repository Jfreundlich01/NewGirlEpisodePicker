import { createTRPCClient } from "@trpc/client";
import fetch from "isomorphic-unfetch";

export const trpc = createTRPCClient({
  url: "/api/trpc",
  fetch,
});
