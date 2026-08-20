import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rock Oil Consulting | Engineering Beyond Boundaries",
  description:
    "Advanced engineering, robotics and digital solutions for critical energy infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
