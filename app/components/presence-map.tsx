export function PresenceMap() {
  const networkPath = "M92 77 C145 66 205 92 255 105 C280 109 292 89 307 78 C326 66 344 68 360 68 C305 74 225 84 92 77";

  return (
    <div className="presenceMap">
      <svg viewBox="0 0 430 170" role="img" aria-labelledby="presence-map-title presence-map-desc">
        <title id="presence-map-title">Rock Oil regional presence</title>
        <desc id="presence-map-desc">Locations across Peninsular Malaysia, Sarawak, Brunei and Sabah.</desc>
        <defs>
          <pattern id="mapDotPattern" width="7" height="7" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1" fill="currentColor" />
          </pattern>
        </defs>

        <g className="mapLand">
          <path d="M63 20 C78 25 88 37 91 51 C94 63 107 72 110 87 C113 101 107 119 115 139 C103 134 96 123 92 111 C87 96 77 88 73 75 C69 60 59 48 57 35 Z" />
          <path d="M203 105 C218 91 240 83 263 79 C280 76 294 73 308 68 L320 81 C309 92 294 102 277 111 C258 121 236 127 218 123 Z" />
          <path d="M309 68 C328 53 350 47 374 51 L396 64 L385 78 L364 85 L342 80 L320 81 Z" />
          <path className="bruneiShape" d="M306 68 L318 66 L322 72 L312 77 L304 74 Z" />
        </g>

        <path className="mapNetwork" d={networkPath} />
        <circle className="mapDataPacket" r="2.6">
          <animateMotion dur="8s" repeatCount="indefinite" path={networkPath} />
        </circle>

        <g className="mapMarker markerMalaysia" transform="translate(92 77)">
          <circle className="markerPulse" r="10" />
          <circle className="markerCore" r="3" />
          <text x="-8" y="-17">Malaysia</text>
        </g>
        <g className="mapMarker markerSarawak" transform="translate(255 105)">
          <circle className="markerPulse" r="10" />
          <circle className="markerCore" r="3" />
          <text x="-15" y="20">Sarawak</text>
        </g>
        <g className="mapMarker markerBrunei" transform="translate(307 78)">
          <circle className="markerPulse" r="10" />
          <circle className="markerCore" r="3" />
          <text x="-12" y="-16">Brunei</text>
        </g>
        <g className="mapMarker markerSabah" transform="translate(360 68)">
          <circle className="markerPulse" r="10" />
          <circle className="markerCore" r="3" />
          <text x="-5" y="20">Sabah</text>
        </g>
      </svg>
      <div className="mapLegend"><span><i /> Regional network</span><b>04 locations</b></div>
    </div>
  );
}
