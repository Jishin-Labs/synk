/** biome-ignore-all lint/correctness/useUniqueElementIds: biome-ignore lint: false positive */

import { ChevronRight } from "lucide-react";

export default function FAQ() {
	return (
		<section id="faq" className="py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-semibold text-3xl tracking-tight md:text-4xl">
					Frequently asked
				</h2>
				<div className="mt-8 grid gap-6 md:grid-cols-2">
					<FAQItem
						q="Is Synk legal for e-signatures in SA?"
						a="Yes — Synk is designed with ECTA in mind for standard commercial agreements. For highly regulated contracts, consult counsel."
					/>
					<FAQItem
						q="Which payments are supported?"
						a="PayFast at launch. More local rails planned as we expand."
					/>
					<FAQItem
						q="Do you support VAT?"
						a="Yes — create VAT-compliant invoices in ZAR with correct totals and due dates."
					/>
					<FAQItem
						q="Can my accountant use it?"
						a="Yes — invite team members on the Team plan with roles and shared workspace."
					/>
				</div>
			</div>
		</section>
	);
}

function FAQItem({ q, a }: { q: string; a: string }) {
	return (
		<details className="group rounded-xl border border-slate-900/10 bg-white/60 p-4 open:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:open:bg-white/10">
			<summary className="flex cursor-pointer select-none list-none items-start justify-between gap-3">
				<span className="font-medium text-slate-900 dark:text-slate-100">
					{q}
				</span>
				<ChevronRight className="size-4 shrink-0 text-slate-500 transition-transform group-open:rotate-90 dark:text-slate-400" />
			</summary>
			<p className="mt-2 text-slate-600 text-sm dark:text-slate-300">{a}</p>
		</details>
	);
}
