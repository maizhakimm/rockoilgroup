import Image from "next/image";
import {
  ArrowDownRight,
} from "@phosphor-icons/react/dist/ssr";
import { MobileMenu } from "./components/mobile-menu";
import { AnimationController } from "./components/animation-controller";
import { SiteNav } from "./components/site-nav";
import { CapabilitiesSection } from "./components/capabilities-section";

const stats = [
  { value: "20+", label: "Years of\nexperience" },
  { value: "350+", label: "Projects\ndelivered" },
  { value: "15+", label: "Countries\nserved" },
  { value: "500+", label: "Industry\nprofessionals" },
];

export default function Home() {
  return (
    <main>
      <AnimationController />
      <section className="hero" id="home">
        <Image
          src="/images/rock-oil-hero.jpg"
          alt="Offshore platform and subsea inspection robot operating above an underwater pipeline"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="heroShade" />
        <div className="techGrid" aria-hidden="true" />
        <div className="cinematicFx" aria-hidden="true">
          <div className="sunsetGlow" />
          <div className="waterShimmer" />
          <div className="underwaterParticles" />
        </div>

        <header className="siteHeader">
          <a className="brand" href="#home" aria-label="Rock Oil home">
            <span>ROCK OIL</span>
            <i />
          </a>
          <SiteNav />
          <MobileMenu />
        </header>

        <div className="heroContent">
          <p className="eyebrow">Engineering the future of asset integrity</p>
          <h1>
            <span className="heroTitleLine"><span>Beyond</span></span>
            <span className="heroTitleLine"><span>Engineering.</span></span>
            <span className="heroTitleLine muted"><span>Better</span></span>
            <span className="heroTitleLine muted"><span>Energy</span></span>
          </h1>
          <div className="introBlock">
            <i />
            <p>
              Advanced engineering, robotics and digital solutions that make critical energy
              infrastructure safer, smarter and built to last.
            </p>
            <a className="outlineButton" href="#capabilities">
              Explore our capabilities <ArrowDownRight size={18} weight="light" />
            </a>
          </div>
        </div>

        <div className="depthScale" aria-hidden="true">
          <span>00</span><span>20</span><span>40</span><span>60</span><span>80</span>
        </div>
        <div className="rovLabel">
          <i />
          <div><b>Subsea inspection</b><span>Autonomous. Intelligent.<br />In action.</span></div>
        </div>
        <div className="scrollCue"><span>Scroll</span><i /></div>
      </section>

      <CapabilitiesSection />

      <section className="impact" id="about">
        <div className="verticalLabel">Our impact</div>
        <div className="statsGrid">
          {stats.map((stat) => (
            <div className="stat" key={stat.value}>
              <strong data-count={stat.value.replace("+", "")}>{stat.value}</strong>
              <span>{stat.label.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
            </div>
          ))}
        </div>
        <div className="presence">
          <div className="mapDots" aria-hidden="true" />
          <div className="locations"><b>Malaysia</b><span>Kuala Lumpur · Miri · Kemaman</span><b>Brunei</b></div>
          <a href="#contact">Our presence <ArrowDownRight size={18} /></a>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="eyebrow">Built for what comes next</p>
        <h2>Progress below<br />the surface.</h2>
        <a className="outlineButton light" href="mailto:enquiries@rockoilgroup.com.my">
          Start a conversation <ArrowDownRight size={18} />
        </a>
      </section>
    </main>
  );
}
