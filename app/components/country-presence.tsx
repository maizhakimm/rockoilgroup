"use client";

import { ArrowDownRight } from "@phosphor-icons/react";
import { useState } from "react";

function MalaysiaFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#fff" />
      {[0, 4, 8, 12, 16, 20].map((y) => <rect key={y} y={y} width="36" height="2" fill="#cc2533" />)}
      <rect width="18" height="13" rx="1.5" fill="#172b6b" />
      <circle cx="8.2" cy="6.4" r="4.2" fill="#ffd34e" />
      <circle cx="9.8" cy="5.7" r="3.5" fill="#172b6b" />
      <circle cx="13.2" cy="6" r="1.2" fill="#ffd34e" />
    </svg>
  );
}

function BruneiFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#f7d33d" />
      <path d="M-3 4 L39 21 L39 16 L-3 -1Z" fill="#fff" />
      <path d="M-3 7 L39 24 L39 19 L-3 2Z" fill="#17191b" />
      <circle cx="18" cy="12" r="2.3" fill="#c52232" />
    </svg>
  );
}

function IndonesiaFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#fff" />
      <path d="M0 2a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v10H0Z" fill="#ce2537" />
    </svg>
  );
}

const countries = [
  { name: "Malaysia", office: "Kuala Lumpur (HQ)", address: "BO1-A-9, Menara 2, KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur.", Flag: MalaysiaFlag },
  { name: "Brunei", office: "Kuala Belait", address: "C/O DPS, P.O. Box 557, Kuala Belait, KA1531, Negara Brunei Darussalam.", Flag: BruneiFlag },
  { name: "Indonesia", office: "Jakarta Barat", address: "C/O PT. Indo Petrogas Energy, Graha Kencana Blok GK, Lantai 2E, Jl. Raya Pejuangan No. 88, 11530.", Flag: IndonesiaFlag },
];

export function CountryPresence() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="countryPresence">
      <div className="countryGrid">
        {countries.map(({ name, office, address, Flag }, index) => (
          <article
            className={`countryCard ${active === index ? "isActive" : ""}`}
            key={name}
            tabIndex={0}
            role="button"
            aria-expanded={active === index}
            onClick={() => setActive(active === index ? null : index)}
            onFocus={() => setActive(index)}
          >
            <div className="flagIcon"><Flag /></div>
            <span className="countryIndex">0{index + 1}</span>
            <i aria-hidden="true" />
            <strong>{name}</strong>
            <span className="countryOffice">{office}</span>
            <small className="countryAddress">{address}</small>
            <ArrowDownRight size={15} />
          </article>
        ))}
      </div>
    </div>
  );
}
