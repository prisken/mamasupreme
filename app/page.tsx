import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.04] px-3 py-1 text-xs text-foreground/70">
              Mama大晒 · 親子活動 · 資源分享
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              湊仔，都可以好嘆！
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-prose">
              一站式搵活動、聽兒歌、攞資源；陪你同小朋友一齊玩得開心、學得輕鬆。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/events"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90 transition"
              >
                探索活動
              </Link>
              <Link
                href="/philosophy"
                className="inline-flex h-11 items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-5 text-sm font-semibold text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                了解理念
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-black/10 dark:border-white/15 bg-gradient-to-br from-black/[0.03] to-black/[0.01] dark:from-white/[0.06] dark:to-white/[0.03]">
              <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
                Cartoon Character Image Placeholder
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mt-14 sm:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">最新活動</h2>
              <p className="mt-2 text-sm text-foreground/70">
                先睇住，之後可以接駁真實資料來源。
              </p>
            </div>
            <Link
              href="/events"
              className="text-sm font-semibold text-foreground/80 hover:text-foreground underline-offset-4 hover:underline"
            >
              查看更多
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "親子週末玩樂日", date: "2026-05-10" },
              { title: "兒歌唱遊小聚", date: "2026-05-18" },
              { title: "資源分享工作坊", date: "2026-06-01" },
            ].map((e) => (
              <div
                key={e.title}
                className="group rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden"
              >
                <div className="aspect-[16/9] w-full bg-black/[0.04] dark:bg-white/[0.06]">
                  <div className="flex h-full items-center justify-center text-xs text-foreground/50">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-sm text-foreground/60">{e.date}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">
                    {e.title}
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/events"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mt-14 sm:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">最新文章</h2>
              <p className="mt-2 text-sm text-foreground/70">
                分享親子心得、工具與實用小貼士。
              </p>
            </div>
            <Link
              href="/resources"
              className="text-sm font-semibold text-foreground/80 hover:text-foreground underline-offset-4 hover:underline"
            >
              查看更多
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "新手爸媽必備清單", date: "2026-04-02" },
              { title: "雨天親子活動提案", date: "2026-03-24" },
              { title: "在家唱兒歌的 5 個技巧", date: "2026-03-10" },
            ].map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden"
              >
                <div className="aspect-[16/9] w-full bg-black/[0.04] dark:bg-white/[0.06]">
                  <div className="flex h-full items-center justify-center text-xs text-foreground/50">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-sm text-foreground/60">{a.date}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">
                    {a.title}
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/resources"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
