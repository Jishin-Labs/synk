import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Section = {
	id: string;
	number: number;
	title: string;
	content: React.ReactNode;
};

function SectionCard({
	id,
	number,
	title,
	children,
}: {
	id: string;
	number: number;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section id={id} className="group scroll-mt-24 transition-all">
			<div className="rounded-2xl bg-linear-to-br from-slate-100/60 to-slate-200/60 p-8 ring-1 ring-slate-300/50 backdrop-blur-sm hover:ring-slate-400/50 dark:from-slate-800/40 dark:to-slate-900/40 dark:ring-slate-700/50 dark:hover:ring-slate-600/50">
				<h2 className="mb-4 flex items-center gap-3 font-semibold text-2xl text-slate-900 dark:text-white">
					<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 ring-1 ring-indigo-500/20 dark:text-indigo-400">
						{number}
					</span>
					{title}
					<Link
						href={`#${id}`}
						className="ml-2 text-slate-400 opacity-0 transition-opacity hover:text-slate-700 group-hover:opacity-100 dark:hover:text-slate-200"
						aria-label={`Link to ${title}`}
					>
						#
					</Link>
				</h2>
				<div className="prose dark:prose-invert max-w-none">{children}</div>
			</div>
		</section>
	);
}

export default function TermsPage() {
	const sections: Section[] = [
		{
			id: "who-we-are",
			number: 1,
			title: "Who we are",
			content: (
				<p>
					Synk (Pty) Ltd is registered in the Republic of South Africa. Contact:{" "}
					<Link href="mailto:synk@gmail.com">synk@gmail.com</Link>.
				</p>
			),
		},
		{
			id: "service",
			number: 2,
			title: "The Service",
			content: (
				<p>
					Synk is a unified platform that helps freelancers and small teams
					create and sign ECTA-compliant contracts, send ZAR/VAT invoices, and
					collect payments via PayFast.
				</p>
			),
		},
		{
			id: "accounts-eligibility",
			number: 3,
			title: "Accounts & Eligibility",
			content: (
				<ul>
					<li>
						You must be at least 18 and have authority to bind your business.
					</li>
					<li>
						You are responsible for your account credentials and all activity
						under your account.
					</li>
				</ul>
			),
		},
		{
			id: "plans-fees-taxes",
			number: 4,
			title: "Plans, Fees & Taxes",
			content: (
				<ul>
					<li>
						We offer Free, Pro, and Team plans. Prices may change with notice.
					</li>
					<li>
						All prices are in ZAR and are exclusive of VAT unless stated
						otherwise.
					</li>
					<li>
						You are responsible for applicable taxes (including VAT) related to
						your use.
					</li>
				</ul>
			),
		},
		{
			id: "payments",
			number: 5,
			title: "Payments via PayFast",
			content: (
				<p>
					Payments are processed by <strong>PayFast</strong> as a third-party
					payment processor. By paying or receiving payments through Synk, you
					also agree to PayFast&apos;s terms and policies. We do not store your
					full card/bank details; those are handled by PayFast.
				</p>
			),
		},
		{
			id: "esign-ecta",
			number: 6,
			title: "E-Signatures & ECTA",
			content: (
				<p>
					Synk provides e-signature functionality intended to comply with South
					Africa&apos;s Electronic Communications and Transactions Act (ECTA)
					for standard commercial agreements. Users are responsible for
					determining whether a given document requires an Advanced Electronic
					Signature (AES) or other special formalities.
				</p>
			),
		},
		{
			id: "your-content",
			number: 7,
			title: "Your Content & Client Data",
			content: (
				<ul>
					<li>You retain ownership of documents and data you upload.</li>
					<li>
						You grant Synk a limited licence to host and process your content to
						provide the Service.
					</li>
					<li>
						You confirm you have a lawful basis to process any personal
						information you upload about your clients.
					</li>
				</ul>
			),
		},
		{
			id: "acceptable-use",
			number: 8,
			title: "Acceptable Use",
			content: (
				<p>
					No illegal, infringing, or harmful activity. No attempts to breach
					security, reverse engineer, or overload the Service.
				</p>
			),
		},
		{
			id: "cancellations-refunds",
			number: 9,
			title: "Cancellations & Refunds",
			content: (
				<p>
					You can cancel at any time; cancellations take effect at the end of
					the current billing period. Refunds are not guaranteed but may be
					granted at our discretion where required by law.
				</p>
			),
		},
		{
			id: "availability-changes",
			number: 10,
			title: "Availability & Changes",
			content: (
				<p>
					We aim for high availability but do not guarantee uninterrupted
					Service. Features may change or be discontinued with notice when
					reasonable.
				</p>
			),
		},
		{
			id: "disclaimers-liability",
			number: 11,
			title: "Disclaimers & Liability",
			content: (
				<p>
					The Service is provided &quot;as is&quot; without warranties. To the
					extent permitted by South African law, our liability is limited to
					fees paid in the 12 months before the event giving rise to the claim.
				</p>
			),
		},
		{
			id: "indemnity",
			number: 12,
			title: "Indemnity",
			content: (
				<p>
					You will defend and indemnify Synk against claims arising from your
					content or misuse of the Service.
				</p>
			),
		},
		{
			id: "governing-law",
			number: 13,
			title: "Governing Law",
			content: (
				<p>
					These Terms are governed by the laws of the Republic of South Africa.
					Disputes will be subject to the exclusive jurisdiction of South
					African courts.
				</p>
			),
		},
		{
			id: "changes-to-terms",
			number: 14,
			title: "Changes to Terms",
			content: (
				<p>
					We may update these Terms. If we make material changes, we will notify
					you (e.g., in-app or by email).
				</p>
			),
		},
		{
			id: "contact",
			number: 15,
			title: "Contact",
			content: (
				<>
					<p>Questions about these terms? We&apos;re here to help.</p>
					<p>
						<Link
							href="#"
							className="mt-3 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-sm text-white shadow-indigo-600/20 shadow-lg transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
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
			<header className="relative overflow-hidden border-slate-200/50 border-b bg-linear-to-b from-slate-100/70 to-transparent dark:border-slate-800/50 dark:from-slate-900/50">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-transparent dark:from-indigo-900/20" />
				<div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="mb-4 font-bold text-5xl text-slate-900 tracking-tight sm:text-6xl dark:text-white">
						Terms of Service
					</h1>
					<p className="max-w-2xl text-slate-600 text-xl dark:text-slate-400">
						These Terms of Service govern your access to and use of Synk,
						provided by{" "}
						<strong className="text-slate-900 dark:text-white">
							Synk (Pty) Ltd
						</strong>
						. By creating an account or using the Service, you agree to these
						Terms.
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
											<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 text-xs ring-1 ring-indigo-500/20 dark:text-indigo-300">
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
								number={s.number}
								title={s.title}
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
