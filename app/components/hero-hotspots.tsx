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
    mobilePoint: { x: 700, y: 500 },
  },
  {
    id: "pipeline",
    number: "02",
    label: "Subsea pipeline",
    capability: "Engineering Solutions",
    detail: "Inspection-led engineering designed to protect subsea infrastructure.",
    target: "#service-01",
    imagePoint: { x: 1080, y: 820 },
    mobilePoint: { x: 330, y: 1260 },
  },
  {
    id: "rov",
    number: "03",
    label: "Inspection ROV",
    capability: "Autonomy & Robotics",
    detail: "Intelligent subsea inspection with greater reach and lower operational risk.",
    target: "#service-02",
    imagePoint: { x: 1435, y: 688 },
    mobilePoint: { x: 655, y: 955 },
  },
];

const scanSequence = [0, 2, 1];

export function HeroHotspots() {
  const [manualActive, setManualActive] = useState<string | null>(null);
  const [autoStep, setAutoStep] = useState(0);
  const [positions, setPositions] = useState<Array<{ left: number; top: number }>>([]);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const placeHotspots = () => {
      const { width, height } = layer.getBoundingClientRect();
      const mobile = window.matchMedia("(max-width: 620px)").matches;
      const sourceWidth = mobile ? 853 : 1920;
      const sourceHeight = mobile ? 1844 : 1080;
      const scale = Math.max(width / sourceWidth, height / sourceHeight);
      const renderedWidth = sourceWidth * scale;
      const renderedHeight = sourceHeight * scale;
      const horizontalPosition = 0.5;
      const offsetX = (width - renderedWidth) * horizontalPosition;
      const offsetY = (height - renderedHeight) * 0.5 + (mobile ? 170 : 0);

      setPositions(hotspots.map(({ imagePoint, mobilePoint }) => ({
        left: offsetX + (mobile ? mobilePoint.x : imagePoint.x) * scale,
        top: offsetY + (mobile ? mobilePoint.y : imagePoint.y) * scale,
      })));
    };

    placeHotspots();
    const observer = new ResizeObserver(placeHotspots);
    observer.observe(layer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (manualActive) return;
    const timer = window.setInterval(() => {
      setAutoStep((current) => (current + 1) % scanSequence.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [manualActive]);

  const scanOrder = positions.length === hotspots.length
    ? [positions[0], positions[2], positions[1]]
    : [];
  const scanPath = scanOrder.length
    ? `M ${scanOrder[0].left} ${scanOrder[0].top} L ${scanOrder[1].left} ${scanOrder[1].top} L ${scanOrder[2].left} ${scanOrder[2].top} Z`
    : "";

  return (
    <div ref={layerRef} className={`heroHotspots ${positions.length ? "isReady" : ""}`} aria-label="Explore technology in the scene">
      {scanPath && (
        <svg className="heroScanNetwork" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
          <path className="scanRoute" d={scanPath} />
          <path className="scanSignal" d={scanPath} />
          <circle className="scanPacket" r="2.7">
            <animateMotion dur="8.4s" repeatCount="indefinite" path={scanPath} />
          </circle>
        </svg>
      )}
      {hotspots.map((hotspot, position) => {
        const isManual = manualActive === hotspot.id;
        const isAuto = !manualActive && scanSequence[autoStep] === position;
        return (
          <div
            className={`heroHotspot heroHotspot--${hotspot.id} ${isManual || isAuto ? "isActive" : ""} ${isManual ? "isManual" : ""} ${isAuto ? "isAuto" : ""}`}
            key={hotspot.id}
            style={positions[position]}
            onMouseEnter={() => setManualActive(hotspot.id)}
            onMouseLeave={() => setManualActive(null)}
          >
            <button
              className="hotspotTarget"
              type="button"
              aria-expanded={isManual}
              aria-controls={`hotspot-${hotspot.id}`}
              aria-label={`View ${hotspot.capability} information`}
              onClick={() => setManualActive(isManual ? null : hotspot.id)}
              onFocus={() => setManualActive(hotspot.id)}
            >
              <Crosshair size={17} weight="light" />
            </button>
            <span className="hotspotMicroLabel"><b>{hotspot.number}</b>{hotspot.label}</span>
            <div className="hotspotAnnotation" id={`hotspot-${hotspot.id}`} aria-hidden={!isManual}>
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
