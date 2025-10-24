/** biome-ignore-all lint/correctness/useUniqueElementIds: biome-ignore lint: false positive */

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
	return (
		<section id="pricing" className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div>
					<h2 className="font-semibold text-3xl tracking-tight md:text-4xl">
						Simple, transparent pricing
					</h2>
					<p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
						Start free. Upgrade as you grow.
					</p>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						<PricingCard
							plan="Free"
							price="R0"
							tagline="For getting started"
							features={["Up to 3 clients", "Basic templates", "Email support"]}
							cta="Start free"
							highlighted={false}
						/>
						<PricingCard
							plan="Pro"
							price="R199/mo"
							tagline="For working pros"
							features={[
								"Unlimited clients",
								"Renewal reminders",
								"Automations",
							]}
							cta="Upgrade"
							highlighted
						/>
						<PricingCard
							plan="Team"
							price="R499/mo"
							tagline="For small teams"
							features={["Shared workspace", "Team roles", "Admin controls"]}
							cta="Start team"
							highlighted={false}
						/>
					</div>

					<p className="mt-6 text-slate-500 text-xs dark:text-slate-400">
						Add-ons: SMS reminders, custom templates, branding
					</p>
				</div>
			</div>
		</section>
	);
}

function PricingCard({
	plan,
	price,
	tagline,
	features,
	cta,
	highlighted = false,
}: {
	plan: string;
	price: string;
	tagline: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
}) {
	const base = "relative overflow-hidden";
	const tone = highlighted
		? "border-emerald-500/30 bg-gradient-to-b from-emerald-500/15 to-emerald-500/10 dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-emerald-500/5"
		: "border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/5";

	return (
		<Card className={`${base} ${tone}`}>
			{highlighted && (
				<div className="absolute top-3 right-3 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-800 dark:border-emerald-500/30 dark:text-emerald-300">
					Popular
				</div>
			)}
			<CardHeader>
				<CardTitle className="text-xl">{plan}</CardTitle>
				<CardDescription>{tagline}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex items-end gap-1">
					<span className="font-semibold text-4xl">{price}</span>
				</div>
				<ul className="mt-4 grid gap-2 text-slate-700 text-sm dark:text-slate-300">
					{features.map((f) => (
						<li key={f} className="inline-flex items-center gap-2">
							<Check className="size-4 text-emerald-600 dark:text-emerald-400" />{" "}
							{f}
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button
					className={
						highlighted
							? "bg-emerald-500 text-white hover:bg-emerald-400 dark:text-slate-900"
							: "border-slate-900/10 text-slate-900 hover:bg-white/80 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
					}
					variant={highlighted ? "default" : "outline"}
				>
					{cta} <ArrowRight className="ml-2 size-4" />
				</Button>
			</CardFooter>
		</Card>
	);
}
