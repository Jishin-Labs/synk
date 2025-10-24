import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-slate-900/10 border-t py-10 text-sm dark:border-white/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-6 md:grid-cols-4">
					<div>
						<Image
							src={"/synk_darkmode.png"}
							alt={"Synk Logo"}
							width={80}
							height={80}
							className="hidden cursor-pointer rounded-xl dark:inline-flex"
						/>
						<Image
							src={"/synk_light.png"}
							alt={"Synk Logo"}
							width={80}
							height={80}
							className="inline-flex cursor-pointer rounded-xl dark:hidden"
						/>
						<p className="mt-3 text-slate-600 dark:text-slate-400">
							Back office for SA freelancers.
						</p>
					</div>

					<div>
						<p className="text-slate-500 dark:text-slate-400">Product</p>
						<ul className="mt-3 grid gap-2 text-slate-700 dark:text-slate-300">
							<li>
								<Link
									href="#features"
									className="hover:text-slate-900 dark:hover:text-white"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#how"
									className="hover:text-slate-900 dark:hover:text-white"
								>
									How it works
								</Link>
							</li>
							<li>
								<Link
									href="#pricing"
									className="hover:text-slate-900 dark:hover:text-white"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-slate-500 dark:text-slate-400">Legal</p>
						<ul className="mt-3 grid gap-2 text-slate-700 dark:text-slate-300">
							<li>
								<Link href="/legal/terms">Terms</Link>
							</li>
							<li>
								<Link
									href="/legal/privacy"
									className="hover:text-slate-900 dark:hover:text-white"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="/legal/security"
									className="hover:text-slate-900 dark:hover:text-white"
								>
									Security
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 flex flex-col items-start justify-between gap-4 text-slate-500 sm:flex-row sm:items-center dark:text-slate-400">
					<p className="text-xs">
						© {new Date().getFullYear()} Synk. All rights reserved.
					</p>
					<p className="text-xs">Build by Jishin-Labs</p>
				</div>
			</div>
		</footer>
	);
}
