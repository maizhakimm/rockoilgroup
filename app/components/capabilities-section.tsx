"use client";

import { ArrowDownRight, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import { DigitalNodesIcon, EngineerIcon, PartnershipIcon, PipelineShieldIcon, PlatformIcon, RovIcon } from "./service-icons";

const services = [
  { index:"01", title:"Engineering Solutions", short:"ENGINEERING", description:"End-to-end engineering and project solutions for complex energy infrastructure.", icon:PlatformIcon },
  { index:"02", title:"Autonomy & Robotics", short:"ROBOTICS", description:"Intelligent subsea systems that extend inspection reach and reduce operational risk.", icon:RovIcon },
  { index:"03", title:"Asset Integrity", short:"INTEGRITY", description:"Pipeline and asset assurance designed to protect performance across the lifecycle.", icon:PipelineShieldIcon },
  { index:"04", title:"Digital Integration", short:"DIGITAL", description:"Connected data and technology solutions that enable faster, smarter decisions.", icon:DigitalNodesIcon },
  { index:"05", title:"Talent & Skills", short:"TALENT", description:"Industry-led capability development for the energy workforce of tomorrow.", icon:EngineerIcon },
  { index:"06", title:"Technology Partnerships", short:"PARTNERSHIPS", description:"Global technology alliances delivering proven innovation to regional operations.", icon:PartnershipIcon },
];

export function CapabilitiesSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilityBackdrop" aria-hidden="true">CAPABILITIES</div>
      <div className="sectionLead">
        <div><p className="eyebrow">What we do</p><span className="activeCounter">{services[active].index} / 06</span></div>
        <h2>Integrated solutions.<br />Measurable impact.</h2>
        <p className="activeServiceCopy">{services[active].description}</p>
        <a href="#contact">View all solutions <ArrowRight size={14} /></a>
      </div>
      <div className="capabilityGrid" onMouseLeave={() => setActive(0)}>
        {services.map(({ index, title, icon:Icon }, position) => (
          <a id={`service-${index}`} href="#contact" className={`capabilityCard ${active === position ? "isActive" : ""}`} key={index} onMouseEnter={() => setActive(position)} onFocus={() => setActive(position)}>
            <span className="cardIndex">{index}</span>
            <Icon className="serviceIcon" />
            <h3>{title}</h3>
            <span className="cardExplore">Explore service</span>
            <ArrowDownRight className="cardArrow" size={18} weight="light" />
          </a>
        ))}
      </div>
    </section>
  );
}
