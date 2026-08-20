import Image from "next/image";
import {
  ArrowDownRight,
} from "@phosphor-icons/react/dist/ssr";
import { MobileMenu } from "./components/mobile-menu";
import { AnimationController } from "./components/animation-controller";
import { SiteNav } from "./components/site-nav";
import { CapabilitiesSection } from "./components/capabilities-section";
import { HeroHotspots } from "./components/hero-hotspots";
import { CountryPresence } from "./components/country-presence";
import { OperationalSequence } from "./components/operational-sequence";

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
        <picture className="heroPicture">
          <source media="(max-width: 620px)" srcSet="/images/rock-oil-hero-mobile.webp" />
          <Image
            src="/images/rock-oil-hero.jpg"
            alt="Offshore platform and subsea inspection robot operating above an underwater pipeline"
            fill
            priority
            sizes="100vw"
            className="heroImage"
          />
        </picture>
        <div className="heroShade" />
        <div className="techGrid" aria-hidden="true" />
        <div className="cinematicFx" aria-hidden="true">
          <div className="sunsetGlow" />
          <div className="waterShimmer" />
          <div className="underwaterParticles" />
        </div>

        <header className="siteHeader">
          <a className="brand" href="#home" aria-label="Rock Oil home">
            <Image
              src="/images/ROCG-HEADER-LOGO.svg"
              alt="Rock Oil Group"
              width={1687}
              height={407}
              priority
              className="brandLogo"
            />
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
            <span className="heroTitleLine muted"><span>Energy.</span></span>
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
        <HeroHotspots />
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
          <CountryPresence />
        </div>
      </section>

      <section className="closing" id="contact">
        <picture className="closingPicture">
          <source media="(max-width: 620px)" srcSet="/images/closing-pipeline-mobile.webp" />
          <Image
            src="/images/closing-pipeline.webp"
            alt="Subsea pipeline carrying connected asset intelligence"
            fill
            sizes="100vw"
            className="closingImage"
          />
        </picture>
        <div className="closingShade" aria-hidden="true" />
        <div className="closingGrid" aria-hidden="true" />
        <div className="closingGlow" aria-hidden="true" />
        <div className="closingParticles" aria-hidden="true" />

        <div className="closingLead">
          <p className="eyebrow">System ready · Built for what comes next</p>
          <h2>
            <span>Engineered for</span>
            <span>what comes next.</span>
          </h2>
          <p className="closingCopy">
            Advanced engineering, asset integrity and intelligent technology for complex
            energy infrastructure.
          </p>
          <div className="closingActions">
            <a className="outlineButton light" href="mailto:enquiries@rockoilgroup.com.my">
              Start a conversation <ArrowDownRight size={18} />
            </a>
            <a className="textLink" href="#capabilities">
              Explore our capabilities <ArrowDownRight size={15} />
            </a>
          </div>
        </div>

        <OperationalSequence />
      </section>

      <footer className="siteFooter">
        <div className="footerBrand">
          <a href="#home" aria-label="Rock Oil home">
            <Image
              src="/images/ROCG-FOOTER-LOGO.svg"
              alt="Rock Oil Consulting Group"
              width={1395}
              height={1399}
              className="footerLogo"
            />
          </a>
          <p>Engineering integrity. Enabling better energy.</p>
        </div>

        <div className="footerNav">
          <span>Navigate</span>
          <a href="#home">Home</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">Our impact</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerContact">
          <span>Start a conversation</span>
          <a href="mailto:enquiries@rockoilgroup.com.my">
            enquiries@rockoilgroup.com.my <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="footerBottom">
          <span>© 2026 Rock Oil Consulting Sdn. Bhd.</span>
          <span>All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
