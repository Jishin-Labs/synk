import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import "../index.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Synk — Where Work and Money Stay in Sync",
	description:
		"Synk is a unified business suite for South African freelancers and small teams. Create and sign ECTA-compliant contracts, send ZAR/VAT invoices, and track payments — all in one seamless workflow.",
	icons: {
		icon: "/synk_light.png",
		shortcut: "/synk_light.png",
		apple: "/synk_light.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
						<Header />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
