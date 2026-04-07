"use client";

import { useMemo, useState } from "react";

type Song = {
  id: string;
  title: string;
  artist?: string;
  youtubeUrl: string;
  spotifyUrl: string;
  lyrics: Array<{
    line: string;
    jyutping: string;
  }>;
};

const songs: Song[] = [
  {
    id: "little-sunshine",
    title: "小小太陽",
    artist: "Mama大晒",
    youtubeUrl: "https://www.youtube.com/",
    spotifyUrl: "https://open.spotify.com/",
    lyrics: [
      { line: "小小太陽 照住我", jyutping: "siu2 siu2 taai3 joeng4 ziu3 zyu6 ngo5" },
      { line: "拍拍手 掂下腳", jyutping: "paak3 paak3 sau2 dim3 haa5 goek3" },
      { line: "一齊唱 一齊笑", jyutping: "jat1 cai4 coeng3 jat1 cai4 siu3" },
      { line: "今日都可以好嘆", jyutping: "gam1 jat6 dou1 ho2 ji5 hou2 taan3" },
    ],
  },
  {
    id: "clean-up-time",
    title: "收拾大作戰",
    artist: "Mama大晒",
    youtubeUrl: "https://www.youtube.com/",
    spotifyUrl: "https://open.spotify.com/",
    lyrics: [
      { line: "玩具返屋企", jyutping: "waan4 geoi6 faan1 uk1 kei2" },
      { line: "我哋一齊嚟", jyutping: "ngo5 dei6 jat1 cai4 lei4" },
      { line: "執一執 放一放", jyutping: "zap1 jat1 zap1 fong3 jat1 fong3" },
      { line: "完成就擊掌", jyutping: "jyun4 sing4 zau6 gik1 zoeng2" },
    ],
  },
  {
    id: "bedtime-ritual",
    title: "瞓覺啦～晚安歌",
    artist: "Mama大晒",
    youtubeUrl: "https://www.youtube.com/",
    spotifyUrl: "https://open.spotify.com/",
    lyrics: [
      { line: "關燈啦 輕輕講", jyutping: "gwaan1 dang1 laa1 hing1 hing1 gong2" },
      { line: "聽下心跳 咚咚咚", jyutping: "teng1 haa5 sam1 tiu3 dung1 dung1 dung1" },
      { line: "攬一攬 親一親", jyutping: "laam2 jat1 laam2 can1 jat1 can1" },
      { line: "甜甜入夢中", jyutping: "tim4 tim4 jap6 mung6 zung1" },
    ],
  },
  {
    id: "rocket-play",
    title: "火箭遊戲歌",
    artist: "Mama大晒",
    youtubeUrl: "https://www.youtube.com/",
    spotifyUrl: "https://open.spotify.com/",
    lyrics: [
      { line: "三、二、一，起飛！", jyutping: "saam1 ji6 jat1 hei2 fei1" },
      { line: "跳一跳 轉個圈", jyutping: "tiu3 jat1 tiu3 zyun3 go3 hyun1" },
      { line: "遊戲有力量", jyutping: "jau4 hei3 jau5 lik6 loeng6" },
      { line: "我哋一齊得意", jyutping: "ngo5 dei6 jat1 cai4 dak1 ji3" },
    ],
  },
];

export default function MusicPage() {
  const [activeId, setActiveId] = useState<string>(songs[0]?.id ?? "");

  const activeSong = useMemo(
    () => songs.find((s) => s.id === activeId) ?? songs[0],
    [activeId],
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          兒歌天地（Music &amp; Songs）
        </h1>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          選擇左邊歌曲，右邊會顯示播放器、歌詞（含 Jyutping）以及 YouTube / Spotify 連結。
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Playlist */}
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden">
            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10">
              <div className="text-sm font-semibold tracking-tight">歌單</div>
              <div className="mt-1 text-xs text-foreground/60">
                {songs.length} 首（placeholder）
              </div>
            </div>
            <ul className="divide-y divide-black/10 dark:divide-white/10">
              {songs.map((s) => {
                const isActive = s.id === activeSong?.id;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(s.id)}
                      className={[
                        "w-full text-left px-5 py-4 transition",
                        "hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
                        isActive
                          ? "bg-black/[0.04] dark:bg-white/[0.06]"
                          : "bg-transparent",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="text-sm font-semibold tracking-tight">
                        {s.title}
                      </div>
                      {s.artist ? (
                        <div className="mt-1 text-xs text-foreground/60">
                          {s.artist}
                        </div>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Player + Lyrics */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-background overflow-hidden">
            <div className="p-6 border-b border-black/10 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {activeSong?.title ?? "—"}
                  </h2>
                  {activeSong?.artist ? (
                    <div className="mt-2 text-sm text-foreground/65">
                      {activeSong.artist}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={activeSong?.youtubeUrl ?? "https://www.youtube.com/"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition"
                  >
                    YouTube
                  </a>
                  <a
                    href={activeSong?.spotifyUrl ?? "https://open.spotify.com/"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-4 text-sm font-semibold text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    Spotify
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.06] p-4">
                <div className="text-sm font-semibold">Audio Player</div>
                <div className="mt-2 text-sm text-foreground/60">
                  Placeholder for an audio player UI (play/pause, progress, volume).
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-black/10 dark:bg-white/15">
                  <div className="h-2 w-1/3 rounded-full bg-foreground/50" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">歌詞</h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    顯示中文歌詞與 Jyutping（placeholder）。
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {(activeSong?.lyrics ?? []).map((l, idx) => (
                  <div
                    key={`${activeSong?.id ?? "song"}-${idx}`}
                    className="rounded-xl border border-black/10 dark:border-white/15 bg-background px-4 py-3"
                  >
                    <div className="text-base font-semibold">{l.line}</div>
                    <div className="mt-1 text-sm text-foreground/65">
                      {l.jyutping}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

