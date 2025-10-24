/** biome-ignore-all lint/correctness/useUniqueElementIds: biome-ignore lint: false positive */

import {
	CreditCard,
	FileSignature,
	Receipt,
	RefreshCw,
	Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
	return (
		<section
			id="how"
			className="border-slate-900/10 border-t bg-white/40 py-20 dark:border-white/10 dark:bg-slate-950/40"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div>
					<h2 className="font-semibold text-3xl tracking-tight md:text-4xl">
						A connected workflow
					</h2>
					<p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
						Mirrors how freelancers actually work.
					</p>

					<div className="mt-10 grid gap-6 md:grid-cols-5">
						<Step
							icon={<FileSignature className="size-5" />}
							title="Create & send"
							desc="ECTA-compliant contract"
						/>
						<Step
							icon={<Zap className="size-5" />}
							title="Auto-activate"
							desc="Client profile created"
						/>
						<Step
							icon={<Receipt className="size-5" />}
							title="Invoice"
							desc="Pre-filled with VAT & terms"
						/>
						<Step
							icon={<CreditCard className="size-5" />}
							title="Get paid"
							desc="PayFast"
						/>
						<Step
							icon={<RefreshCw className="size-5" />}
							title="Renew"
							desc="Reminders for both sides"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function Step({
	icon,
	title,
	desc,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
}) {
	return (
		<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/5">
			<CardContent className="p-5">
				<div className="mb-3 grid size-10 place-content-center rounded-xl bg-slate-200/60 dark:bg-white/10">
					{icon}
				</div>
				<p className="font-medium">{title}</p>
				<p className="text-slate-600 text-sm dark:text-slate-300">{desc}</p>
			</CardContent>
		</Card>
	);
}
