import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./system";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(async ({ ctx }) => {
      // In Next.js, we'll handle cookie clearing differently
      // The cookie will be cleared in the response
      ctx.cookies.delete(COOKIE_NAME);
      return {
        success: true,
      } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
