import type { AppFileRouter } from "@synk/api";
import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton<AppFileRouter>();
