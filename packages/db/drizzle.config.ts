import { defineConfig } from "drizzle-kit";

if (process.env.VERCEL !== "1") {
	await import("dotenv/config");
}

export default defineConfig({
	schema: "./src/schema",
	out: "./src/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL || "",
	},
});
