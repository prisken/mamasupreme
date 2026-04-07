export default function PhilosophyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          MDS理念
        </h1>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          三個支柱，幫你喺忙碌育兒生活入面，依然可以更有節奏、更有連結、亦更有玩心。
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Pillar 1 */}
        <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] p-3">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 8v4l3 2" />
                <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">即時管理</h2>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                用簡單可執行嘅方法，快速處理當下的情況：先穩住節奏，再做選擇，減少「越管越亂」。
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] p-3">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.2l-.6-.6a5.5 5.5 0 0 0-7.8 7.8l.6.6L12 20.8l7.8-7.8.6-.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                情人式思維
              </h2>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                用「連結」先行：先理解需要與感受，再談規矩與合作，令親子溝通更柔軟、更有效。
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] p-3">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13c0 6 7 9 7 9s7-3 7-9a7 7 0 0 0-14 0Z" />
                <path d="M12 2c2.5 1.5 4 4.5 4 7" />
                <path d="M9 13l6-2" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">遊戲的力量</h2>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                用遊戲化方式建立規矩與習慣：把「要做」變成「想做」，增加投入感，同時減少衝突。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

