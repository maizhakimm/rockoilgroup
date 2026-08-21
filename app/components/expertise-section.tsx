"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight } from "@phosphor-icons/react";
import Image from "next/image";

const expertise = [
  { title:"EPRS & IRM Solution", eyebrow:"Emergency · Repair · Maintenance", description:"Integrated subsea inspection, repair and maintenance support for critical offshore infrastructure.", image:"/expertise/eprs-irm.webp", tone:"red" },
  { title:"Offshore Survey & Inspection Services", eyebrow:"Survey · Detection · Intelligence", description:"Offshore survey and inspection services that turn field data into clear, actionable asset insight.", image:"/expertise/offshore-survey.webp", tone:"cyan" },
  { title:"Asset Integrity Solutions", eyebrow:"Assurance · Reliability · Lifecycle", description:"Inspection-led integrity solutions designed to support safer, more reliable asset performance.", image:"/expertise/asset-integrity.webp", tone:"steel" },
  { title:"Subsea & Decommissioning Engineering", eyebrow:"Engineering · Execution · Closure", description:"Engineering support for complex subsea works and responsible decommissioning programmes.", image:"/expertise/decommissioning.webp", tone:"ocean" },
  { title:"Trainings and Courses", eyebrow:"Capability · Competency · People", description:"Industry-focused training that strengthens technical competency, operational readiness and safety culture.", image:"/expertise/training.webp", tone:"light" },
] as const;

export function ExpertiseSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const stack = stackRef.current;
      const stage = stageRef.current;
      if (!stack || !stage) return;
      const rect = stack.getBoundingClientRect();
      const travel = Math.max(1, stack.offsetHeight - stage.offsetHeight);
      const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
      const progress = Math.min(expertise.length - 1, Math.max(0, (stickyTop - rect.top) / travel * (expertise.length - 1)));
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const raw = index === 0 ? 1 : Math.min(1, Math.max(0, progress - (index - 1)));
        card.style.setProperty("--expertise-enter", String(1 - Math.pow(1 - raw, 3)));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", schedule, { passive:true });
    addEventListener("resize", schedule);
    return () => { removeEventListener("scroll", schedule); removeEventListener("resize", schedule); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <section className="expertise expertise--horizontal" id="solutions">
      <div className="expertiseIntro">
        <div><p className="eyebrow">Integrated subsea capability</p><h2>Our expertise.</h2></div>
        <p>Discover how our integrated services address complex subsea inspection, integrity, engineering and capability challenges.</p>
      </div>
      <div className="expertiseStack" ref={stackRef}>
        <div className="expertiseStage" ref={stageRef}>
          {expertise.map(({ title, eyebrow, description, image, tone }, index) => (
            <article className={`expertiseCard expertiseCard--${tone}`} key={title}
              ref={(node) => { cardRefs.current[index] = node; }}
              style={{ "--expertise-index": index, "--expertise-enter": index === 0 ? 1 : 0 } as React.CSSProperties}>
              <div className="expertiseRail" aria-hidden="true"><strong>0{index + 1}</strong><span>{title}</span></div>
              <div className="expertiseCardBody">
                <div className="expertiseCardCopy">
                  <div className="expertiseCardMeta"><span>0{index + 1}</span><span>{eyebrow}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                  <a href="#contact">Explore service <ArrowDownRight size={20} /></a>
                </div>
                <div className="expertiseVisual" aria-hidden="true">
                  <Image className="expertisePhoto" src={image} alt="" fill sizes="(max-width: 900px) 100vw, 46vw" />
                  <div className="expertisePhotoShade" /><div className="expertiseReticle"><i /><i /><i /></div>
                  <span>ROCG / CAPABILITY 0{index + 1}</span>
                </div>
                <div className="expertiseScan" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
