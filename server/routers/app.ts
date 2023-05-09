// src/server/router/index.ts
import { createRouter } from "server/context";
import superjson from "superjson";
import { MovieRouter } from "./movie";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("movie.", MovieRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
