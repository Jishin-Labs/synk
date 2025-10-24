import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Section = {
	id: string;
	number: number;
	title: string;
	tone?: "emerald" | "blue" | "purple" | "cyan" | "orange" | "indigo" | "red";
	content: React.ReactNode;
};

function SectionCard({
	id,
	number,
	title,
	tone = "emerald",
	children,
}: {
	id: string;
	number: number;
	title: string;
	tone?: Section["tone"];
	children: React.ReactNode;
}) {
	const toneMap: Record<
		NonNullable<Section["tone"]>,
		{
			fromLight: string;
			fromDark: string;
			ringLight: string;
			ringDark: string;
			badgeBg: string;
			badgeRing: string;
			badgeText: string;
			linkHover: string;
		}
	> = {
		emerald: {
			fromLight: "from-emerald-50/80",
			fromDark: "dark:from-emerald-900/20",
			ringLight: "ring-emerald-300/60 hover:ring-emerald-400/70",
			ringDark: "dark:ring-emerald-500/30 dark:hover:ring-emerald-500/50",
			badgeBg: "bg-emerald-500/10",
			badgeRing: "ring-emerald-500/20",
			badgeText: "text-emerald-700 dark:text-emerald-300",
			linkHover: "hover:text-emerald-700 dark:hover:text-emerald-200",
		},
		blue: {
			fromLight: "from-blue-50/80",
			fromDark: "dark:from-blue-900/20",
			ringLight: "ring-blue-300/60 hover:ring-blue-400/70",
			ringDark: "dark:ring-blue-500/30 dark:hover:ring-blue-500/50",
			badgeBg: "bg-blue-500/10",
			badgeRing: "ring-blue-500/20",
			badgeText: "text-blue-700 dark:text-blue-300",
			linkHover: "hover:text-blue-700 dark:hover:text-blue-200",
		},
		purple: {
			fromLight: "from-purple-50/80",
			fromDark: "dark:from-purple-900/20",
			ringLight: "ring-purple-300/60 hover:ring-purple-400/70",
			ringDark: "dark:ring-purple-500/30 dark:hover:ring-purple-500/50",
			badgeBg: "bg-purple-500/10",
			badgeRing: "ring-purple-500/20",
			badgeText: "text-purple-700 dark:text-purple-300",
			linkHover: "hover:text-purple-700 dark:hover:text-purple-200",
		},
		cyan: {
			fromLight: "from-cyan-50/80",
			fromDark: "dark:from-cyan-900/20",
			ringLight: "ring-cyan-300/60 hover:ring-cyan-400/70",
			ringDark: "dark:ring-cyan-500/30 dark:hover:ring-cyan-500/50",
			badgeBg: "bg-cyan-500/10",
			badgeRing: "ring-cyan-500/20",
			badgeText: "text-cyan-700 dark:text-cyan-300",
			linkHover: "hover:text-cyan-700 dark:hover:text-cyan-200",
		},
		orange: {
			fromLight: "from-orange-50/80",
			fromDark: "dark:from-orange-900/20",
			ringLight: "ring-orange-300/60 hover:ring-orange-400/70",
			ringDark: "dark:ring-orange-500/30 dark:hover:ring-orange-500/50",
			badgeBg: "bg-orange-500/10",
			badgeRing: "ring-orange-500/20",
			badgeText: "text-orange-700 dark:text-orange-300",
			linkHover: "hover:text-orange-700 dark:hover:text-orange-200",
		},
		indigo: {
			fromLight: "from-indigo-50/80",
			fromDark: "dark:from-indigo-900/20",
			ringLight: "ring-indigo-300/60 hover:ring-indigo-400/70",
			ringDark: "dark:ring-indigo-500/30 dark:hover:ring-indigo-500/50",
			badgeBg: "bg-indigo-500/10",
			badgeRing: "ring-indigo-500/20",
			badgeText: "text-indigo-700 dark:text-indigo-300",
			linkHover: "hover:text-indigo-700 dark:hover:text-indigo-200",
		},
		red: {
			fromLight: "from-red-50/80",
			fromDark: "dark:from-red-900/20",
			ringLight: "ring-red-300/60 hover:ring-red-400/70",
			ringDark: "dark:ring-red-500/30 dark:hover:ring-red-500/50",
			badgeBg: "bg-red-500/10",
			badgeRing: "ring-red-500/20",
			badgeText: "text-red-700 dark:text-red-300",
			linkHover: "hover:text-red-700 dark:hover:text-red-200",
		},
	};

	const t = toneMap[tone];

	return (
		<section id={id} className="group scroll-mt-24">
			<div
				className={[
					"rounded-2xl bg-linear-to-br",
					t.fromLight,
					"to-white/70",
					"p-8 ring-1 backdrop-blur-sm transition-all",
					t.ringLight,
					"dark:to-slate-900/40",
					t.fromDark,
					t.ringDark,
				].join(" ")}
			>
				<div className="mb-4 flex items-start gap-4">
					<h2 className="flex items-center gap-3 font-semibold text-2xl text-slate-900 dark:text-white">
						<span
							className={[
								"inline-flex h-10 w-10 items-center justify-center rounded-lg text-base",
								t.badgeBg,
								t.badgeText,
								"ring-1",
								t.badgeRing,
							].join(" ")}
						>
							{number}
						</span>
						{title}
						<Link
							href={`#${id}`}
							className={[
								"ml-2 opacity-0 transition-opacity group-hover:opacity-100",
								"text-slate-500 dark:text-slate-400",
								"hover:text-slate-800 dark:hover:text-slate-200",
								t.linkHover,
							].join(" ")}
							aria-label={`Link to ${title}`}
						>
							#
						</Link>
					</h2>
				</div>
				<div className="prose prose-slate dark:prose-invert max-w-none">
					{children}
				</div>
			</div>
		</section>
	);
}

export default function SecurityPage() {
	const sections: Section[] = [
		{
			id: "encryption",
			number: 1,
			title: "Encryption",
			tone: "emerald",
			content: (
				<ul>
					<li>Data in transit protected via TLS (HTTPS).</li>
					<li>
						Data at rest stored in encrypted databases or encrypted volumes
						provided by our cloud provider.
					</li>
				</ul>
			),
		},
		{
			id: "access-controls",
			number: 2,
			title: "Access Controls",
			tone: "blue",
			content: (
				<ul>
					<li>Least-privilege access to production systems.</li>
					<li>
						Multi-factor authentication required for administrative access.
					</li>
					<li>Audit logging of sensitive actions where feasible.</li>
				</ul>
			),
		},
		{
			id: "application-security",
			number: 3,
			title: "Application Security",
			tone: "purple",
			content: (
				<ul>
					<li>Regular dependency updates and vulnerability monitoring.</li>
					<li>
						Static typing (TypeScript) and input validation on critical paths.
					</li>
					<li>
						Secure development lifecycle with code reviews and env separation.
					</li>
				</ul>
			),
		},
		{
			id: "data-management",
			number: 4,
			title: "Data Management",
			tone: "cyan",
			content: (
				<ul>
					<li>Regular backups with tested restore procedures.</li>
					<li>
						Configurable data retention aligned to business and legal needs.
					</li>
					<li>Export and deletion available upon verified request.</li>
				</ul>
			),
		},
		{
			id: "incident-response",
			number: 5,
			title: "Incident Response",
			tone: "orange",
			content: (
				<ul>
					<li>
						Defined process for detection, containment, eradication, recovery.
					</li>
					<li>
						Customer notifications for incidents that materially affect their
						data, consistent with legal obligations.
					</li>
				</ul>
			),
		},
		{
			id: "sub-processors",
			number: 6,
			title: "Sub-processors",
			tone: "indigo",
			content: (
				<p>
					We use vetted vendors to deliver parts of the Service. Primary
					payments vendor: <strong>PayFast</strong>. We evaluate vendor security
					posture and require contractual safeguards.
				</p>
			),
		},
		{
			id: "responsible-disclosure",
			number: 7,
			title: "Responsible Disclosure",
			tone: "red",
			content: (
				<>
					<p>
						If you believe you've found a vulnerability, please email{" "}
						<Link href="mailto:synk@gmail.com">synk@gmail.com</Link> with
						details. Do not publicly disclose before we have verified and
						remediated the issue.
					</p>
					<div className="rounded-lg bg-black/5 p-4 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
						<p className="text-slate-700 text-sm dark:text-slate-300">
							<strong>Important:</strong> Please allow us reasonable time to
							address security issues before making them public.
						</p>
					</div>
				</>
			),
		},
		{
			id: "contact",
			number: 8,
			title: "Contact",
			tone: "emerald",
			content: (
				<>
					<p>Questions about security? We're here to help.</p>
					<p>
						<Link
							href="#"
							className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-sm text-white shadow-emerald-600/20 shadow-lg transition-all hover:bg-emerald-500 hover:shadow-emerald-500/30 dark:bg-emerald-600 dark:hover:bg-emerald-500"
						>
							Email security team
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
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent dark:from-emerald-900/20" />
				<div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="mb-4 font-bold text-5xl text-slate-900 tracking-tight sm:text-6xl dark:text-white">
						Security at Synk
					</h1>
					<p className="max-w-2xl text-slate-700 text-xl dark:text-slate-400">
						We take a pragmatic, defence-in-depth approach to safeguarding your
						information. Below is an overview of current practices.
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
											<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-900/5 text-slate-700 text-xs ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
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
								tone={s.tone}
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
