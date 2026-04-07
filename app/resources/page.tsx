"use client";

import { useMemo, useState } from "react";
import ArticleCard, { type ArticleCardData } from "../../components/ArticleCard";

const categories = ["全部", "即時管理", "正向育兒", "遊戲的力量", "親子生活"] as const;
type Category = (typeof categories)[number];

const placeholderArticles: ArticleCardData[] = [
  {
    title: "即時管理：3 分鐘穩住現場的小步驟",
    date: "2026-04-02",
    category: "即時管理",
    excerpt: "先穩定節奏，再處理選擇；用最少力氣換來最大秩序。",
    href: "/resources",
  },
  {
    title: "正向育兒：由「唔好」到「可以」的轉句技巧",
    date: "2026-03-24",
    category: "正向育兒",
    excerpt: "把禁令變成可做的選項，孩子更容易合作，家長更少爆炸。",
    href: "/resources",
  },
  {
    title: "遊戲的力量：用任務卡培養收拾習慣",
    date: "2026-03-10",
    category: "遊戲的力量",
    excerpt: "把收拾變成關卡，一次只做一小步，反而更快完成。",
    href: "/resources",
  },
  {
    title: "親子生活：週末放電清單（雨天版）",
    date: "2026-02-28",
    category: "親子生活",
    excerpt: "室內也可以玩得大汗淋漓：感官遊戲、障礙賽、音樂律動。",
    href: "/resources",
  },
  {
    title: "即時管理：當小朋友發脾氣時，先做哪一步？",
    date: "2026-02-15",
    category: "即時管理",
    excerpt: "用一句話建立安全感，再慢慢引導回到可行的選擇。",
    href: "/resources",
  },
  {
    title: "正向育兒：建立界線但唔靠吼的方法",
    date: "2026-01-30",
    category: "正向育兒",
    excerpt: "界線清晰＋選擇有限＋一致執行，親子關係反而更親密。",
    href: "/resources",
  },
  {
    title: "遊戲的力量：5 個簡單玩具輪替策略",
    date: "2026-01-12",
    category: "遊戲的力量",
    excerpt: "玩具少咗，專注多咗；輪替設計得好，孩子玩得更深。",
    href: "/resources",
  },
  {
    title: "親子生活：睡前儀式感，令晚安更順利",
    date: "2025-12-20",
    category: "親子生活",
    excerpt: "固定流程＋小提示＋預告時間，瞓覺不再拉鋸戰。",
    href: "/resources",
  },
  {
    title: "即時管理：外出時的「一招三用」預告法",
    date: "2025-12-01",
    category: "即時管理",
    excerpt: "預告時間、下一步、可選擇；把未知變成可預期。",
    href: "/resources",
  },
  {
    title: "正向育兒：讚美唔等於亂讚",
    date: "2025-11-10",
    category: "正向育兒",
    excerpt: "描述行為＋反映努力，比單純『叻』更有力量。",
    href: "/resources",
  },
  {
    title: "遊戲的力量：把刷牙變成火箭倒數",
    date: "2025-10-22",
    category: "遊戲的力量",
    excerpt: "把例行任務變成劇本，孩子更投入，家長更省力。",
    href: "/resources",
  },
  {
    title: "親子生活：家長的休息，也係育兒的一部分",
    date: "2025-10-01",
    category: "親子生活",
    excerpt: "照顧好自己，先有餘裕照顧孩子；休息唔係自私。",
    href: "/resources",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("全部");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return placeholderArticles.filter((a) => {
      const matchesCategory =
        activeCategory === "全部" ? true : a.category === activeCategory;
      const matchesQuery = q
        ? `${a.title} ${a.excerpt ?? ""} ${a.category}`.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          資源庫（Resources &amp; Blog）
        </h1>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          文章、工具與實用小貼士。可用搜尋及分類快速篩選（目前為 placeholder）。
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-black/10 dark:border-white/15 bg-background p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <label htmlFor="article-search" className="sr-only">
              搜尋文章
            </label>
            <div className="relative">
              <input
                id="article-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋：標題 / 分類 / 內容…"
                className="w-full rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
                  aria-label="清除搜尋"
                >
                  清除
                </button>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = c === activeCategory;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={[
                    "h-9 rounded-full px-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-foreground text-background"
                      : "border border-black/10 dark:border-white/15 text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-sm text-foreground/60">
          顯示 {filtered.length} 篇文章
          {activeCategory !== "全部" ? `（分類：${activeCategory}）` : ""}
          {query.trim() ? `（搜尋：${query.trim()}）` : ""}
        </div>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article) => (
            <ArticleCard
              key={`${article.title}-${article.date}`}
              article={article}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-black/10 dark:border-white/15 bg-background p-8 text-center">
            <div className="text-lg font-semibold">搵唔到結果</div>
            <p className="mt-2 text-sm text-foreground/70">
              試下清除搜尋或轉換分類。
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}

