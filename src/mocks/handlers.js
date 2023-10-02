import { rest } from "msw";

export const handlers = [
  rest.get("/user", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "test.user",
        createdAt: "2007-03-01T13:00:00Z",
        role: "ADMIN",
        theme: { type: 'light' },
      })
    );
  }),
];
