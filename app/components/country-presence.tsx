import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";

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

function UsaFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#fff" />
      {[0, 4, 8, 12, 16, 20].map((y) => <rect key={y} y={y} width="36" height="2" fill="#bd2939" />)}
      <rect width="16" height="12" rx="1.5" fill="#263d74" />
      {[4, 8, 12].map((x) => [3, 6, 9].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r=".55" fill="#fff" />))}
    </svg>
  );
}

const countries = [
  { name: "Malaysia", location: "Kuala Lumpur · Miri · KSB, Terengganu", Flag: MalaysiaFlag },
  { name: "Brunei", location: "Kuala Belait", Flag: BruneiFlag },
  { name: "United States", location: "Sugar Land, Texas", Flag: UsaFlag },
];

export function CountryPresence() {
  return (
    <div className="countryPresence">
      <div className="presenceHeading">
        <span>Our presence</span>
        <strong>03</strong>
        <small>International locations</small>
      </div>
      <div className="countryGrid">
        {countries.map(({ name, location, Flag }, index) => (
          <a className="countryCard" href="#contact" key={name}>
            <div className="flagIcon"><Flag /></div>
            <span className="countryIndex">0{index + 1}</span>
            <i aria-hidden="true" />
            <strong>{name}</strong>
            <small>{location}</small>
            <ArrowDownRight size={15} />
          </a>
        ))}
      </div>
    </div>
  );
}
