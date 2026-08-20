import {
  ArrowDownRight,
  GraduationCap,
  HardHat,
  PipeWrench,
  Scan,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const expertise = [
  {
    title: "EPRS & IRM Solution",
    eyebrow: "Emergency · Repair · Maintenance",
    description: "Integrated subsea inspection, repair and maintenance support for critical offshore infrastructure.",
    Icon: PipeWrench,
    tone: "red",
  },
  {
    title: "Offshore Survey & Inspection Services",
    eyebrow: "Survey · Detection · Intelligence",
    description: "Offshore survey and inspection services that turn field data into clear, actionable asset insight.",
    Icon: Scan,
    tone: "cyan",
  },
  {
    title: "Asset Integrity Solutions",
    eyebrow: "Assurance · Reliability · Lifecycle",
    description: "Inspection-led integrity solutions designed to support safer, more reliable asset performance.",
    Icon: ShieldCheck,
    tone: "steel",
  },
  {
    title: "Subsea & Decommissioning Engineering",
    eyebrow: "Engineering · Execution · Closure",
    description: "Engineering support for complex subsea works and responsible decommissioning programmes.",
    Icon: HardHat,
    tone: "ocean",
  },
  {
    title: "Trainings and Courses",
    eyebrow: "Capability · Competency · People",
    description: "Industry-focused training that strengthens technical competency, operational readiness and safety culture.",
    Icon: GraduationCap,
    tone: "light",
  },
] as const;

export function ExpertiseSection() {
  return (
    <section className="expertise" id="solutions">
      <div className="expertiseIntro">
        <div>
          <p className="eyebrow">Integrated subsea capability</p>
          <h2>Our<br />expertise.</h2>
        </div>
        <p>
          Discover how our integrated services address complex subsea inspection,
          integrity, engineering and capability challenges.
        </p>
      </div>

      <div className="expertiseStack">
        {expertise.map(({ title, eyebrow, description, Icon, tone }, index) => (
          <article
            className={`expertiseCard expertiseCard--${tone}`}
            key={title}
            style={{ "--expertise-index": index } as React.CSSProperties}
          >
            <div className="expertiseCardCopy">
              <div className="expertiseCardMeta">
                <span>0{index + 1}</span>
                <span>{eyebrow}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact">
                Explore service <ArrowDownRight size={20} />
              </a>
            </div>
            <div className="expertiseVisual" aria-hidden="true">
              <div className="expertiseOrbit"><i /><i /><i /></div>
              <Icon weight="thin" />
              <span>ROCG / CAPABILITY 0{index + 1}</span>
            </div>
            <div className="expertiseScan" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
