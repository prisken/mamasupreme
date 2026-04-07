import Link from "next/link";

export type ArticleCardData = {
  title: string;
  date: string;
  href: string;
  category: string;
  excerpt?: string;
};

export default function ArticleCard({ article }: { article: ArticleCardData }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden">
      <div className="aspect-[16/9] w-full bg-black/[0.04] dark:bg-white/[0.06]">
        <div className="flex h-full items-center justify-center text-xs text-foreground/50">
          Image Placeholder
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-foreground/60">{article.date}</div>
          <div className="rounded-full border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/65">
            {article.category}
          </div>
        </div>
        <div className="mt-2 text-lg font-semibold tracking-tight">
          {article.title}
        </div>
        {article.excerpt ? (
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            {article.excerpt}
          </p>
        ) : null}
        <div className="mt-4">
          <Link
            href={article.href}
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

