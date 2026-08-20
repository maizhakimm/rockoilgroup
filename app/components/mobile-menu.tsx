"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const links = ["Solutions", "Capabilities", "Projects", "About", "Insights", "Careers", "Contact"];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileMenu">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
        {open ? <X size={21} /> : <List size={21} />}<span>Menu</span>
      </button>
      <div className={`mobilePanel ${open ? "isOpen" : ""}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
      </div>
    </div>
  );
}
