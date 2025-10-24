import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CTA() {
	return (
		<section className="border-slate-900/10 border-t bg-linear-to-br from-white via-slate-100 to-white py-20 dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-6 lg:grid-cols-2">
					<div>
						<h3 className="font-semibold text-2xl md:text-3xl">
							Make admin vanish.
						</h3>
						<p className="mt-2 max-w-lg text-slate-600 dark:text-slate-300">
							Put contracts, invoices, and payments on one track. Less
							switching, more billable hours.
						</p>
						<div className="mt-6 flex flex-col gap-3 sm:flex-row">
							<Button className="bg-emerald-500 text-white hover:bg-emerald-400 dark:text-slate-900">
								Create your account
							</Button>
							<Link
								href="#pricing"
								className="inline-flex items-center text-slate-700 text-sm hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
							>
								See pricing <ChevronRight className="ml-1 size-4" />
							</Link>
						</div>
					</div>

					<Card className="border-slate-900/10 bg-white/60 dark:border-white/10 dark:bg-white/5">
						<CardHeader className="pb-2">
							<CardTitle className="text-base">Get launch updates</CardTitle>
							<CardDescription>
								Join the waitlist — SA-first, freelancer-friendly.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="flex gap-2">
								<Input
									type="email"
									placeholder="you@studio.co.za"
									className="border-slate-900/10 bg-white text-slate-900 placeholder:text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-100"
								/>
								<Button
									type="submit"
									className="bg-emerald-500 text-white hover:bg-emerald-400 dark:text-slate-900"
								>
									Notify me
								</Button>
							</form>
							<p className="mt-2 inline-flex items-center gap-1 text-slate-500 text-xs dark:text-slate-400">
								<Mail className="size-3" /> No spam. Unsubscribe anytime.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
