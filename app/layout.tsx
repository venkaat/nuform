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
  metadataBase: new URL("https://nuform.in"),
  title: "Nüform | Luxury Interior Design & Architecture",
  description:
    "Nüform delivers bespoke luxury interior design, exterior architecture, modular kitchens, custom curtains, 3D acrylic name boards, and smart home automation.",
  keywords: [
    "Nüform",
    "Nuform",
    "Interior Design",
    "Architecture",
    "Modular Kitchen",
    "Curtains",
    "Name Boards",
    "Exterior Design",
    "Smart Automation",
  ],
  icons: {
    icon: "/images/logo_light.png",
    shortcut: "/images/logo_light.png",
    apple: "/images/logo_light.png",
  },
  openGraph: {
    title: "Nüform | Luxury Interior Design & Architecture",
    description:
      "Bespoke luxury interior design, modular kitchen architecture, custom curtains & 3D acrylic signage.",
    siteName: "Nüform",
    images: [
      {
        url: "/images/logo_light.png",
        width: 1024,
        height: 723,
        alt: "Nüform Interior Design & Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
