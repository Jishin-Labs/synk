/** biome-ignore-all lint/correctness/useUniqueElementIds: biome-ignore lint: false positive */

import { Banknote, Layers, Shield, Timer } from "lucide-react";
import Hero from "@/app/home/_components/hero";
import CTA from "./_components/cta";
import FAQ from "./_components/faq";
import Features from "./_components/features";
import HowItWorks from "./_components/how-it-works";
import Pricing from "./_components/pricing";

export default function Home() {
	return (
		<div className="min-h-screen bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
			<Hero />

			<section className="border-slate-900/10 border-y bg-white/40 py-10 dark:border-white/10 dark:bg-slate-950/40">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-slate-600 text-xs dark:text-slate-400">
						<span className="inline-flex items-center gap-2">
							<Layers className="size-3" /> Contract + Ledger = Synk
						</span>
						<span className="inline-flex items-center gap-2">
							<Banknote className="size-3" /> ZAR-first billing
						</span>
						<span className="inline-flex items-center gap-2">
							<Timer className="size-3" /> Renewal reminders
						</span>
						<span className="inline-flex items-center gap-2">
							<Shield className="size-3" /> POPIA-aware
						</span>
					</div>
				</div>
			</section>

			<Features />
			<HowItWorks />
			<Pricing />
			<CTA />
			<FAQ />
		</div>
	);
}
