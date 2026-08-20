"use client";

import { ArrowDownRight, Crosshair } from "@phosphor-icons/react";
import { useState } from "react";

const hotspots = [
  {
    id: "platform",
    number: "01",
    label: "Offshore platform",
    capability: "Asset Integrity",
    detail: "Structural assurance and lifecycle intelligence for critical offshore assets.",
    target: "#service-03",
  },
  {
    id: "pipeline",
    number: "02",
    label: "Subsea pipeline",
    capability: "Engineering Solutions",
    detail: "Inspection-led engineering designed to protect subsea infrastructure.",
    target: "#service-01",
  },
  {
    id: "rov",
    number: "03",
    label: "Inspection ROV",
    capability: "Autonomy & Robotics",
    detail: "Intelligent subsea inspection with greater reach and lower operational risk.",
    target: "#service-02",
  },
];

export function HeroHotspots() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="heroHotspots" aria-label="Explore technology in the scene">
      {hotspots.map((hotspot) => {
        const isActive = active === hotspot.id;
        return (
          <div
            className={`heroHotspot heroHotspot--${hotspot.id} ${isActive ? "isActive" : ""}`}
            key={hotspot.id}
            onMouseEnter={() => setActive(hotspot.id)}
            onMouseLeave={() => setActive(null)}
          >
            <button
              className="hotspotTarget"
              type="button"
              aria-expanded={isActive}
              aria-controls={`hotspot-${hotspot.id}`}
              aria-label={`View ${hotspot.capability} information`}
              onClick={() => setActive(isActive ? null : hotspot.id)}
              onFocus={() => setActive(hotspot.id)}
            >
              <Crosshair size={17} weight="light" />
            </button>
            <div className="hotspotAnnotation" id={`hotspot-${hotspot.id}`} aria-hidden={!isActive}>
              <div className="hotspotMeta"><span>{hotspot.number}</span>{hotspot.label}</div>
              <strong>{hotspot.capability}</strong>
              <p>{hotspot.detail}</p>
              <a href={hotspot.target}>Explore capability <ArrowDownRight size={14} /></a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
