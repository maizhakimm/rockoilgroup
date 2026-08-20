import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 54, height: 54, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function PlatformIcon(props: IconProps) { return <svg {...base} {...props}><path d="M9 52h46M15 52V29h34v23M20 29l5-17h14l5 17M23 42h18M21 52l4-10 4 10M35 52l4-10 4 10M32 12V5M28 17h8"/><path d="M12 29h40M18 24h28"/></svg>; }
export function RovIcon(props: IconProps) { return <svg {...base} {...props}><rect x="13" y="21" width="37" height="25" rx="5"/><path d="M20 21v-7h20v7M19 46l-5 7M44 46l5 7M50 29h6v10h-6M13 29H8v10h5M25 27h14v13H25zM28 33h8M32 27v13"/><circle cx="19" cy="34" r="2.5"/><circle cx="45" cy="34" r="2.5"/></svg>; }
export function PipelineShieldIcon(props: IconProps) { return <svg {...base} {...props}><path d="M7 39h20M37 39h20M7 31h20M37 31h20M11 31v8M18 31v8M46 31v8M53 31v8M32 10l14 6v11c0 11-6 19-14 24-8-5-14-13-14-24V16l14-6z"/><path d="m26 29 4 4 8-9"/></svg>; }
export function DigitalNodesIcon(props: IconProps) { return <svg {...base} {...props}><rect x="23" y="23" width="18" height="18" rx="3"/><circle cx="9" cy="13" r="4"/><circle cx="55" cy="13" r="4"/><circle cx="9" cy="51" r="4"/><circle cx="55" cy="51" r="4"/><path d="m12 16 12 10M52 16 40 26M12 48l12-10M52 48 40 38M32 23V9M32 55V41M28 9h8M28 55h8"/></svg>; }
export function EngineerIcon(props: IconProps) { return <svg {...base} {...props}><path d="M18 27c0-10 6-17 14-17s14 7 14 17M15 27h34M21 27v4a11 11 0 0 0 22 0v-4M10 55c2-10 10-16 22-16s20 6 22 16M32 10v10M26 11v9M38 11v9"/><path d="m25 42 7 8 7-8"/></svg>; }
export function PartnershipIcon(props: IconProps) { return <svg {...base} {...props}><circle cx="32" cy="32" r="23"/><path d="M9 32h46M32 9c7 7 11 14 11 23S39 48 32 55M32 9c-7 7-11 14-11 23s4 16 11 23M14 20h36M14 44h36"/><path d="m22 35 6 5 14-15" strokeWidth="2"/></svg>; }
