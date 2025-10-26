import { appFileRouter } from "@synk/api";
import { createRouteHandler } from "uploadthing/next";

export const runtime = "nodejs";

export const { GET, POST } = createRouteHandler({
	router: appFileRouter,
});
