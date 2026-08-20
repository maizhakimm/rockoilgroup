export function HeroHud() {
  return (
    <div className="heroHud" aria-hidden="true">
      <div className="hudHeader">
        <span><i /> Asset monitoring</span>
        <b>Scan active</b>
      </div>
      <svg className="hudWave" viewBox="0 0 240 54" preserveAspectRatio="none">
        <path className="hudGridLine" d="M0 13.5H240M0 27H240M0 40.5H240" />
        <path className="hudSignalGlow" d="M0 31 L17 30 L25 23 L31 38 L39 27 L55 29 L65 17 L72 43 L80 28 L97 30 L108 25 L116 34 L126 29 L140 30 L150 20 L158 40 L166 27 L181 30 L193 24 L201 35 L211 28 L224 30 L240 27" />
        <path className="hudSignal" d="M0 31 L17 30 L25 23 L31 38 L39 27 L55 29 L65 17 L72 43 L80 28 L97 30 L108 25 L116 34 L126 29 L140 30 L150 20 L158 40 L166 27 L181 30 L193 24 L201 35 L211 28 L224 30 L240 27" />
      </svg>
      <div className="hudReadout">
        <span><small>Mode</small>Subsea scan</span>
        <span><small>Link</small>Stable</span>
        <span><small>Node</small>03</span>
      </div>
      <div className="hudSweep"><i /></div>
    </div>
  );
}
