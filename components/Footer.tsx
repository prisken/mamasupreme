import Link from "next/link";

const socialLinks = [
  {
    label: "IG",
    href: "https://www.instagram.com/mamasupreme.hk?igsh=NXZveGRscXd3YTV5&utm_source=qr",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@mamasupreme.hk?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    label: "FB",
    href: "https://www.facebook.com/profile.php?id=61572163374474",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC5W8TeMld0WE_zzA0LmKTUQ",
  },
] as const;

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <div className="text-lg font-semibold tracking-tight">
              <Link href="/" className="hover:opacity-90">
                Mama大晒
              </Link>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              與你一齊分享親子生活、活動與資源。
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground">社交媒體</div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/75 hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-foreground">
              訂閱電子報
            </div>
            <p className="text-sm text-foreground/70">
              接收最新活動與內容更新。
            </p>
            <form
              className="flex flex-col sm:flex-row w-full max-w-md gap-2"
              method="post"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition"
              >
                提交
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-black/10 dark:border-white/10 pt-6">
          <div className="text-sm text-foreground/70">
            © 2026 Mama大晒
          </div>
          <div className="text-xs text-foreground/50">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

