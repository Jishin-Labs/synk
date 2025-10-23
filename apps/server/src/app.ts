import { trpcServer } from "@hono/trpc-server";
import { createContext } from "@synk/api/context";
import { appRouter } from "@synk/api/routers";
import { auth } from "@synk/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export const app = new Hono();

app.use(logger());

const normalize = (o?: string | null) => (o ? o.replace(/\/$/, "") : "");
const ALLOWED = new Set<string>(
	[normalize(process.env.CORS_ORIGIN), "http://localhost:3001"].filter(
		Boolean,
	) as string[],
);

app.use(
	cors({
		origin: (origin) => {
			const o = normalize(origin);
			return o && ALLOWED.has(o) ? o : "";
		},
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.use("/trpc/*", async (c, next) => {
	const origin = normalize(c.req.header("origin"));
	if (origin && ALLOWED.has(origin)) {
		c.header("Access-Control-Allow-Origin", origin);
		c.header("Vary", "Origin");
		c.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
		c.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
		c.header("Access-Control-Allow-Credentials", "true");
	}
	if (c.req.method === "OPTIONS") return c.body(null, 204);
	await next();
});

app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
		createContext: (_opts, context) => createContext({ context }),
	}),
);

app.get("/", (c) => c.text("OK"));

export default app;
