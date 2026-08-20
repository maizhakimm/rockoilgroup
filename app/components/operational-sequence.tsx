"use client";

import { useEffect, useState } from "react";

const steps = [
  { number: "01", title: "Assess", copy: "Define the asset and operational challenge" },
  { number: "02", title: "Engineer", copy: "Design the right technical response" },
  { number: "03", title: "Inspect", copy: "Capture accurate condition intelligence" },
  { number: "04", title: "Optimise", copy: "Turn insight into lasting performance" },
] as const;

export function OperationalSequence() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (locked || hovered !== null) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [hovered, locked]);

  const preview = (index: number) => {
    if (locked) return;
    setHovered(index);
    setActive(index);
  };

  const select = (index: number) => {
    setActive(index);
    setLocked(true);
  };

  const resume = () => {
    setLocked(false);
    setHovered(null);
  };

  return (
    <div className="operationSequence" aria-label="Rock Oil integrated delivery sequence">
      <div className="sequenceHeader">
        <span><i /> Operational sequence</span>
        <button type="button" onClick={resume} aria-label={locked ? "Resume automatic sequence" : "Sequence is playing automatically"}>
          {locked ? "Resume auto" : `${String(active + 1).padStart(2, "0")} / 04 · Auto`}
        </button>
      </div>
      <div className="sequenceTrack" aria-hidden="true">
        <i className="sequenceProgress" style={{ width: `${(active + 1) * 25}%` }} />
      </div>

      {steps.map((step, index) => (
        <button
          className={`sequenceStep${active === index ? " isActive" : ""}`}
          type="button"
          key={step.number}
          aria-pressed={locked && active === index}
          onMouseEnter={() => preview(index)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => preview(index)}
          onBlur={() => setHovered(null)}
          onClick={() => select(index)}
        >
          <span>{step.number}</span>
          <span className="sequenceStepCopy">
            <strong>{step.title}</strong>
            <small>{step.copy}</small>
          </span>
          <i aria-hidden="true" />
        </button>
      ))}

      <div className="sequenceStatus">
        <span>Integrated delivery protocol</span>
        <span>{locked ? "Selection locked" : hovered !== null ? "Manual preview" : "Continuous cycle"}</span>
      </div>
    </div>
  );
}
