"use client";

import {
	ArrowRight,
	Check,
	CreditCard,
	FileSignature,
	Globe2,
	Receipt,
	Shield,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../components/ui/card";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="-top-24 -left-24 pointer-events-none absolute h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl dark:bg-emerald-500/10" />
			<div className="-bottom-24 -right-24 pointer-events-none absolute h-96 w-96 rounded-full bg-teal-500/15 blur-3xl dark:bg-teal-500/10" />

			<div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-slate-700 text-xs dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
							<Shield className="size-3" />
							ECTA-compliant contracts · VAT ready · ZAR native
						</div>

						<h1 className="mt-4 font-semibold text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
							Where your{" "}
							<span className="bg-linear-to-tr from-emerald-400 to-teal-400 bg-clip-text text-transparent">
								work
							</span>{" "}
							and{" "}
							<span className="bg-linear-to-tr from-emerald-400 to-teal-400 bg-clip-text text-transparent">
								money
							</span>{" "}
							stay in sync
						</h1>

						<p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300/90">
							Synk unifies contracts, invoicing, and payments for South African
							freelancers and small teams. Create and sign agreements, send
							ZAR/VAT invoices, and get paid — all in one flow.
						</p>

						<div className="mt-6 flex flex-col gap-3 sm:flex-row">
							<Button className="group bg-emerald-500 text-white hover:bg-emerald-400 dark:text-slate-900">
								Start free{" "}
								<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
							</Button>
							<Button
								variant="outline"
								className="border-slate-900/10 bg-white/60 text-slate-900 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
							>
								Book a demo
							</Button>
						</div>

						<div className="mt-6 flex flex-wrap items-center gap-4 text-slate-500 text-xs dark:text-slate-400">
							<div className="inline-flex items-center gap-1">
								<Check className="size-3" /> Free plan available
							</div>
							<div className="inline-flex items-center gap-1">
								<Shield className="size-3" /> POPIA minded
							</div>
							<div className="inline-flex items-center gap-1">
								<Globe2 className="size-3" /> Built for SA first
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="relative rounded-2xl border border-slate-900/10 bg-linear-to-b from-white/70 to-white/50 p-2 shadow-2xl dark:border-white/10 dark:from-white/10 dark:to-white/5">
							<div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-900/10 dark:bg-slate-950/60 dark:ring-white/10">
								<div className="grid grid-cols-2 gap-3">
									<Card className="col-span-2 border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-slate-900/60">
										<CardHeader className="pb-2">
											<CardTitle className="text-base">New Contract</CardTitle>
											<CardDescription>Guided, ECTA-compliant</CardDescription>
										</CardHeader>
										<CardContent className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-300">
											<FileSignature className="size-4" /> ContractSync
										</CardContent>
									</Card>

									<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-slate-900/60">
										<CardHeader className="pb-2">
											<CardTitle className="text-base">Invoice #1024</CardTitle>
											<CardDescription>ZAR + VAT</CardDescription>
										</CardHeader>
										<CardContent className="flex items-center gap-2 text-slate-600 text-sm dark:text-slate-300">
											<Receipt className="size-4" /> Ledgerly
										</CardContent>
									</Card>

									<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-slate-900/60">
										<CardHeader className="pb-2">
											<CardTitle className="text-base">
												Payment received
											</CardTitle>
											<CardDescription>PayFast</CardDescription>
										</CardHeader>
										<CardContent className="flex items-center gap-2 text-emerald-700 text-sm dark:text-emerald-300">
											<CreditCard className="size-4" /> R12,500.00
										</CardContent>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
