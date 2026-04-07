import Link from "next/link";

export type EventCardData = {
  title: string;
  date: string;
  href: string;
  location?: string;
  imageAlt?: string;
};

export default function EventCard({ event }: { event: EventCardData }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden">
      <div className="aspect-[16/9] w-full bg-black/[0.04] dark:bg-white/[0.06]">
        <div className="flex h-full items-center justify-center text-xs text-foreground/50">
          Image Placeholder
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm text-foreground/60">{event.date}</div>
          {event.location ? (
            <div className="text-xs text-foreground/55">{event.location}</div>
          ) : null}
        </div>
        <div className="mt-1 text-lg font-semibold tracking-tight">
          {event.title}
        </div>
        <div className="mt-4">
          <Link
            href={event.href}
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

