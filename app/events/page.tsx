import EventCard, { type EventCardData } from "../../components/EventCard";

const placeholderEvents: EventCardData[] = [
  {
    title: "親子週末玩樂日：感官遊戲小站",
    date: "2026-05-10",
    location: "香港",
    href: "/events",
  },
  {
    title: "兒歌唱遊小聚：一起唱、一起跳",
    date: "2026-05-18",
    location: "九龍",
    href: "/events",
  },
  {
    title: "MDS理念分享會：即時管理入門",
    date: "2026-05-25",
    location: "新界",
    href: "/events",
  },
  {
    title: "親子繪本時間：睡前儀式感",
    date: "2026-06-01",
    location: "香港",
    href: "/events",
  },
  {
    title: "戶外放電日：公園任務挑戰",
    date: "2026-06-08",
    location: "九龍",
    href: "/events",
  },
  {
    title: "小小手作：紙黏土創作課",
    date: "2026-06-15",
    location: "新界",
    href: "/events",
  },
  {
    title: "家長工作坊：情人式思維與溝通",
    date: "2026-06-22",
    location: "香港",
    href: "/events",
  },
  {
    title: "音樂律動：節奏遊戲時間",
    date: "2026-06-29",
    location: "九龍",
    href: "/events",
  },
  {
    title: "玩具輪替分享：如何減少收拾戰爭",
    date: "2026-07-06",
    location: "新界",
    href: "/events",
  },
  {
    title: "親子夏日派對：水玩安全小貼士",
    date: "2026-07-13",
    location: "香港",
    href: "/events",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          活動專區
        </h1>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          探索最新親子活動、工作坊與小聚。以下以 placeholder 資料示範列表與版面。
        </p>
      </header>

      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholderEvents.map((event) => (
            <EventCard key={`${event.title}-${event.date}`} event={event} />
          ))}
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">參加者感言</h2>
            <p className="mt-2 text-sm text-foreground/70">
              來自家長們的真實回饋（placeholder）。
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              name: "阿欣媽媽",
              role: "2 歲小朋友家長",
              quote:
                "第一次參加就覺得好放鬆，活動節奏好清晰，小朋友玩得投入，我都學到即時管理嘅方法。",
              initials: "欣",
            },
            {
              name: "Jason 爸爸",
              role: "3 歲小朋友家長",
              quote:
                "用遊戲方式帶小朋友合作，真係少咗好多拉鋸。返到屋企都用到，效果好明顯。",
              initials: "J",
            },
            {
              name: "慧敏",
              role: "新手爸媽",
              quote:
                "情人式思維提醒我先連結再講道理，親子溝通順咗，連我自己情緒都穩定咗。",
              initials: "慧",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-black/10 dark:border-white/15 bg-background p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <figcaption className="text-sm font-semibold">
                    {t.name}
                  </figcaption>
                  <div className="text-xs text-foreground/60">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-foreground/75 leading-relaxed">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

