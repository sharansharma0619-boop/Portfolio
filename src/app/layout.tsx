import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharan | DevOps Engineer",
  description:
    "Portfolio of Sharan, a DevOps Engineer focused on reliable delivery, cloud infrastructure, and observability.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
