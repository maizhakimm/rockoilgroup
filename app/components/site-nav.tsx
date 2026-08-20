"use client";

import { useEffect, useState } from "react";

const links = [
  ["Solutions", "solutions"], ["Capabilities", "capabilities"], ["Projects", "projects"],
  ["About", "about"], ["Insights", "insights"], ["Careers", "careers"], ["Contact", "contact"],
] as const;

export function SiteNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "solutions", "capabilities", "about", "contact"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -55%", threshold: [0, 0.15, 0.4] });
    ids.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="desktopNav" aria-label="Primary navigation">
      {links.map(([label, id]) => (
        <a key={id} href={`#${id}`} className={active === id ? "isActive" : ""}>{label}</a>
      ))}
    </nav>
  );
}
