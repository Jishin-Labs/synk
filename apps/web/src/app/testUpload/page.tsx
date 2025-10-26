"use client";

import { UploadButton } from "@/utils/uploadthing";

const endpoint = "imageUploader" as const;

export default function Uploader() {
	return (
		<UploadButton
			endpoint={endpoint}
			onClientUploadComplete={(files) => console.log(files)}
			onUploadError={(err) => console.error(err)}
		/>
	);
}
