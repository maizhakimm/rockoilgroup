"use client";

import { ArrowDownRight, Crosshair } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const hotspots = [
  {
    id: "platform",
    number: "01",
    label: "Offshore platform",
    capability: "Asset Integrity",
    detail: "Structural assurance and lifecycle intelligence for critical offshore assets.",
    target: "#service-03",
    imagePoint: { x: 1470, y: 320 },
  },
  {
    id: "pipeline",
    number: "02",
    label: "Subsea pipeline",
    capability: "Engineering Solutions",
    detail: "Inspection-led engineering designed to protect subsea infrastructure.",
    target: "#service-01",
    imagePoint: { x: 1080, y: 820 },
  },
  {
    id: "rov",
    number: "03",
    label: "Inspection ROV",
    capability: "Autonomy & Robotics",
    detail: "Intelligent subsea inspection with greater reach and lower operational risk.",
    target: "#service-02",
    imagePoint: { x: 1435, y: 688 },
  },
];

export function HeroHotspots() {
  const [active, setActive] = useState<string | null>(null);
  const [positions, setPositions] = useState<Array<{ left: number; top: number }>>([]);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const placeHotspots = () => {
      const { width, height } = layer.getBoundingClientRect();
      const scale = Math.max(width / 1920, height / 1080);
      const renderedWidth = 1920 * scale;
      const renderedHeight = 1080 * scale;
      const horizontalPosition = window.matchMedia("(max-width: 620px)").matches ? 0.61 : 0.5;
      const offsetX = (width - renderedWidth) * horizontalPosition;
      const offsetY = (height - renderedHeight) * 0.5;

      setPositions(hotspots.map(({ imagePoint }) => ({
        left: offsetX + imagePoint.x * scale,
        top: offsetY + imagePoint.y * scale,
      })));
    };

    placeHotspots();
    const observer = new ResizeObserver(placeHotspots);
    observer.observe(layer);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={layerRef} className={`heroHotspots ${positions.length ? "isReady" : ""}`} aria-label="Explore technology in the scene">
      {hotspots.map((hotspot, position) => {
        const isActive = active === hotspot.id;
        return (
          <div
            className={`heroHotspot heroHotspot--${hotspot.id} ${isActive ? "isActive" : ""}`}
            key={hotspot.id}
            style={positions[position]}
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
