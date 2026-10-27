"use client";

import { useEffect, useRef, useState } from "react";
import GraphView from "./GraphView";

/** Монтирует карту только когда блок появляется на экране. */
export default function GraphEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="graph-embed">
      {visible ? <GraphView /> : null}
    </div>
  );
}
