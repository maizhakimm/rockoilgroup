"use client";

import { ArrowDownRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = ["Solutions", "Capabilities", "Projects", "About", "Insights", "Careers", "Contact"];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", open);
    return () => document.body.classList.remove("menuOpen");
  }, [open]);

  return (
    <div className="mobileMenu">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
        {open ? <X size={21} /> : <List size={21} />}<span>Menu</span>
      </button>
      <div className={`mobilePanel ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="mobilePanelMeta"><span>Rock Oil</span><span>Navigation / 07</span></div>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span><strong>{link}</strong><ArrowDownRight size={21} />
            </a>
          ))}
        </nav>
        <div className="mobilePanelFooter"><i /> Engineering integrity · Better energy</div>
      </div>
    </div>
  );
}
