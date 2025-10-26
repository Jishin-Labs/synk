import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";

const f = createUploadthing();

export const appFileRouter: FileRouter = {
	// Example endpoint — change name/limits as you like
	imageUploader: f({
		image: { maxFileSize: "4MB", maxFileCount: 5 },
	})
		.input(
			z.object({
				// any client-provided metadata you want validated
				albumId: z.uuid().optional(),
			}),
		)
		.middleware(async ({ input }) => {
			// Optional: gate uploads by auth
			// const session = await getSessionFromCookies(req.headers);
			// if (!session) throw new Error("Unauthorized");
			return {
				userId: "demo-user-id", // put session.user.id or similar
				albumId: input.albumId ?? null,
			};
		})
		.onUploadComplete(async ({ file }) => {
			// Runs on the server after the upload succeeds
			// Use Drizzle here to persist the file
			// await db.insert(files).values({
			//   key: file.key,
			//   url: file.url,
			//   name: file.name,
			//   size: file.size,
			//   userId: metadata.userId,
			//   albumId: metadata.albumId,
			// });
			return { fileUrl: file.ufsUrl };
		}),
};

export type AppFileRouter = typeof appFileRouter;
