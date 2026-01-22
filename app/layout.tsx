import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KK Fire Services | Fire Fighting AMC & Fire Safety Systems in Pune",
  description:
    "ISO 9001:2015 certified fire fighting contractor in Pune providing Fire AMC, Hydrant, Sprinkler, Fire Alarm & Safety Solutions.",

  verification: {
    google: "86bFA5caTISGC4HWWnpZSiByZYSrwqu2iib6kEjNPJY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
