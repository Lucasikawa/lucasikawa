import type { Metadata } from "next";
import { Instrument_Serif, Urbanist } from "next/font/google";
import "./globals.css";


const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Lucas Ikawa",
  description: "Growth - CRM - Product Design - Computer Science - Venture Capital - Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
