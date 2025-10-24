import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Section = {
	id: string;
	title: string;
	number: number;
	content: React.ReactNode;
};

function SectionCard({
	id,
	title,
	number,
	children,
}: {
	id: string;
	title: string;
	number: number;
	children: React.ReactNode;
}) {
	return (
		<section id={id} className="group scroll-mt-24">
			<div className="rounded-2xl bg-linear-to-br from-slate-100/70 to-white/70 p-8 ring-1 ring-slate-300/60 backdrop-blur-sm transition-all hover:ring-slate-400/60 dark:from-slate-800/40 dark:to-slate-900/40 dark:ring-slate-700/50 dark:hover:ring-slate-600/50">
				<h2 className="mb-4 flex items-center gap-3 font-semibold text-2xl text-slate-900 dark:text-white">
					<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-400">
						{number}
					</span>
					{title}
					<Link
						href={`#${id}`}
						className="ml-2 text-slate-500 opacity-0 transition-opacity hover:text-slate-800 group-hover:opacity-100 dark:text-slate-400 dark:hover:text-slate-200"
						aria-label={`Link to ${title}`}
					>
						#
					</Link>
				</h2>
				<div className="prose prose-slate dark:prose-invert max-w-none">
					{children}
				</div>
			</div>
		</section>
	);
}

export default function PrivacyPage() {
	const sections: Section[] = [
		{
			id: "controller",
			number: 1,
			title: "Who is responsible for your information?",
			content: (
				<p>
					The responsible party is <strong>Synk (Pty) Ltd</strong>, Republic of
					South Africa. Contact:{" "}
					<Link href="mailto:synk@gmail.com">synk@gmail.com</Link>.
				</p>
			),
		},
		{
			id: "data-we-process",
			number: 2,
			title: "Information we process",
			content: (
				<ul>
					<li>
						<strong>Account data</strong> (name, email, business details)
					</li>
					<li>
						<strong>Client &amp; contract data</strong> you upload (including
						personal information in agreements)
					</li>
					<li>
						<strong>Billing &amp; payments data</strong> processed via PayFast;
						we receive limited transaction metadata
					</li>
					<li>
						<strong>Usage &amp; device data</strong> for security, analytics,
						and product improvement
					</li>
					<li>
						<strong>Bank CSV imports</strong> (e.g., FNB, Capitec, Standard
						Bank) if you choose to upload them
					</li>
				</ul>
			),
		},
		{
			id: "purposes",
			number: 3,
			title: "Why we process information",
			content: (
				<ul>
					<li>
						Provide and improve Synk features (contracts, invoicing, payments)
					</li>
					<li>Authenticate users, secure the Service, and prevent fraud</li>
					<li>Process payments and send billing communications</li>
					<li>Comply with legal obligations (e.g., tax, accounting)</li>
					<li>
						Communicate updates, features, and service notices (you can opt out
						of non-essential emails)
					</li>
				</ul>
			),
		},
		{
			id: "legal-basis",
			number: 4,
			title: "Legal basis under POPIA",
			content: (
				<p>
					We rely on performance of a contract, compliance with law, legitimate
					interests (e.g., securing the Service), and consent where required.
				</p>
			),
		},
		{
			id: "sharing",
			number: 5,
			title: "Sharing & processors",
			content: (
				<p>
					We share data with service providers who help us operate Synk. Primary
					processor for payments: <strong>PayFast</strong>. We require
					processors to implement suitable security measures and process data
					only on our instructions.
				</p>
			),
		},
		{
			id: "transfers",
			number: 6,
			title: "Cross-border transfers",
			content: (
				<p>
					If we transfer information outside South Africa, we use appropriate
					safeguards consistent with POPIA.
				</p>
			),
		},
		{
			id: "retention",
			number: 7,
			title: "Retention",
			content: (
				<p>
					We keep personal information only as long as necessary for the
					purposes above and to comply with legal/financial record-keeping
					obligations, after which we delete or anonymise it.
				</p>
			),
		},
		{
			id: "security",
			number: 8,
			title: "Security",
			content: (
				<p>
					We use industry-standard measures such as encryption in transit (TLS),
					access controls, and regular updates. See our{" "}
					<Link href="/legal/security">Security</Link> page for more detail.
				</p>
			),
		},
		{
			id: "rights",
			number: 9,
			title: "Your rights",
			content: (
				<>
					<ul>
						<li>Access, correct, or delete your personal information</li>
						<li>Object to or restrict processing in certain circumstances</li>
						<li>Withdraw consent where processing relies on consent</li>
						<li>Data portability where technically feasible</li>
					</ul>
					<p>
						To exercise rights, contact{" "}
						<Link href="mailto:synk@gmail.com">synk@gmail.com</Link>. We will
						verify your identity before responding.
					</p>
				</>
			),
		},
		{
			id: "children",
			number: 10,
			title: "Children",
			content: (
				<p>
					Synk is not intended for children under 18, and we do not knowingly
					process their data.
				</p>
			),
		},
		{
			id: "changes",
			number: 11,
			title: "Changes",
			content: (
				<p>
					We may update this policy to reflect changes to our practices. We will
					notify you of material updates.
				</p>
			),
		},
		{
			id: "contact",
			number: 12,
			title: "Contact",
			content: (
				<>
					<p>Questions or concerns? We're here to help.</p>
					<p>
						<Link
							className="mt-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-sm text-white shadow-blue-600/20 shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/30 dark:bg-blue-600 dark:hover:bg-blue-500"
							href="mailto:synk@gmail.com"
						>
							Email us at synk@gmail.com
							<ArrowRight className="h-4 w-4" />
						</Link>
					</p>
				</>
			),
		},
	];

	return (
		<main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
			<header className="relative overflow-hidden border-slate-200/60 border-b bg-linear-to-b from-slate-100/70 to-transparent dark:border-slate-800/50 dark:from-slate-900/50">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/20" />
				<div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="mb-2 font-bold text-5xl text-slate-900 tracking-tight sm:text-6xl dark:text-white">
						Privacy Policy
					</h1>
					<p className="max-w-2xl text-slate-700 text-xl dark:text-slate-400">
						Your privacy matters. Here's how we protect and handle your data at
						Synk.
					</p>
				</div>
			</header>

			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
					<aside className="hidden lg:col-span-3 lg:block">
						<nav className="sticky top-24 space-y-2">
							<p className="mb-2 text-slate-500 text-xs uppercase tracking-wider dark:text-slate-400">
								On this page
							</p>
							<ol className="space-y-1 text-sm">
								{sections.map((s) => (
									<li key={s.id}>
										<Link
											href={`#${s.id}`}
											className="flex items-center gap-2 rounded-md px-2 py-1.5 text-slate-700 transition hover:bg-slate-100/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white"
										>
											<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 text-blue-700 text-xs ring-1 ring-blue-500/20 dark:text-blue-300">
												{s.number}
											</span>
											<span className="line-clamp-1">{s.title}</span>
										</Link>
									</li>
								))}
							</ol>
						</nav>
					</aside>

					<article className="space-y-8 lg:col-span-9">
						{sections.map((s) => (
							<SectionCard
								key={s.id}
								id={s.id}
								title={s.title}
								number={s.number}
							>
								{s.content}
							</SectionCard>
						))}
					</article>
				</div>
			</div>
		</main>
	);
}
