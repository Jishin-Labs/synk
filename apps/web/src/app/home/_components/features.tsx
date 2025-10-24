/** biome-ignore-all lint/correctness/useUniqueElementIds: biome-ignore lint: false positive */

import { Check, FileSignature, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Features() {
	return (
		<section id="features" className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div>
					<h2 className="font-semibold text-3xl tracking-tight md:text-4xl">
						Two layers. One flow.
					</h2>
					<p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
						Synk merges <strong>ContractSync</strong> (legal + signatures) with{" "}
						<strong>Ledgerly</strong> (invoices + payments) so your agreements
						and money move together.
					</p>

					<div className="mt-10 grid gap-6 md:grid-cols-2">
						<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/5">
							<CardHeader>
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="flex items-center gap-2 text-xl">
											<FileSignature className="size-5 text-emerald-500" />{" "}
											ContractSync
										</CardTitle>
										<CardDescription>
											Guided, ECTA-compliant contract builder with local
											templates
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent className="grid gap-3 text-slate-700 text-sm dark:text-slate-300">
								<FeatureItem text="Secure e-signatures (ECTA)" />
								<FeatureItem text="Auto client creation on signature" />
								<FeatureItem text="Automated renewal reminders" />
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="border-slate-900/10 text-slate-900 hover:bg-white/80 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
								>
									Explore ContractSync
								</Button>
							</CardFooter>
						</Card>

						<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/5">
							<CardHeader>
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="flex items-center gap-2 text-xl">
											<Receipt className="size-5 text-teal-500" /> Ledgerly
										</CardTitle>
										<CardDescription>
											Smart invoices with ZAR + VAT, payments & reconciliation
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent className="grid gap-3 text-slate-700 text-sm dark:text-slate-300">
								<FeatureItem text="Pre-filled invoices from contract terms" />
								<FeatureItem text="PayFast collection" />
								<FeatureItem text="Bank CSV import (FNB, Capitec, Standard Bank)" />
							</CardContent>
							<CardFooter>
								<Button
									variant="outline"
									className="border-slate-900/10 text-slate-900 hover:bg-white/80 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
								>
									Explore Ledgerly
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeatureItem({ text }: { text: string }) {
	return (
		<div className="inline-flex items-center gap-2">
			<Check className="size-4 text-emerald-600 dark:text-emerald-400" />
			<span>{text}</span>
		</div>
	);
}
