"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  label: string;
};

function parseValue(value: string) {
  const match = value.match(/([\d,]+)(.*)/);
  if (!match) return { target: 0, suffix: value };
  return {
    target: Number(match[1].replaceAll(",", "")),
    suffix: match[2],
  };
}

function formatValue(value: number, suffix: string) {
  return `${Math.round(value).toLocaleString("en-IN")}${suffix}`;
}

export function CountUpStats({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const duration = 1200;
    const startedAt = performance.now();

    function tick(now: number) {
      const next = Math.min((now - startedAt) / duration, 1);
      setProgress(1 - Math.pow(1 - next, 3));
      if (next < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  return (
    <div ref={ref} className={className}>
      {stats.map((item) => {
        const parsed = parseValue(item.value);
        const display = parsed.target > 0 ? formatValue(parsed.target * progress, parsed.suffix) : item.value;

        return (
          <div className="stat-tile rounded-lg p-4 text-center" key={item.label}>
            <strong className="block text-xl font-extrabold text-[var(--brand-sky)] md:text-2xl">{display}</strong>
            <span className="mt-1 block text-[0.7rem] font-semibold uppercase text-white/85">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
