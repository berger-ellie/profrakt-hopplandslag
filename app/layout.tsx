import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "En helt spesiell leveranse | Profrakt x Hopplandslaget",
  description:
    "Se hvordan vi sammen med Hopplandslaget overrasket søskenparet Mikkel og Ea Cathrin – og hvordan Profrakt leverer for din bedrift hver eneste dag.",
  openGraph: {
    title: "En helt spesiell leveranse | Profrakt x Hopplandslaget",
    description:
      "Se hvordan vi sammen med Hopplandslaget overrasket søskenparet Mikkel og Ea Cathrin.",
    type: "website",
    locale: "nb_NO",
    siteName: "Profrakt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
