"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      className={`backToTop ${visible ? "isVisible" : ""}`}
      href="#home"
      aria-label="Back to top"
      style={{ "--scroll-progress": `${progress * 3.6}deg` } as React.CSSProperties}
    >
      <span><ArrowUp size={17} weight="bold" /></span>
    </a>
  );
}
