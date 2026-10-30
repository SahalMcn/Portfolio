import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sahal Muhammed C N — Flutter Developer | Mobile Application Developer",
  description:
    "Flutter Developer with hands-on experience building and shipping production mobile applications on Google Play and App Store with 10K+ downloads.",
  openGraph: {
    title: "Sahal Muhammed C N — Flutter Developer | Mobile Application Developer",
    description:
      "Flutter Developer with hands-on experience building and shipping production mobile applications on Google Play and App Store with 10K+ downloads.",
    url: "https://sahaldeveloper.vercel.app",
    siteName: "Sahal Muhammed C N Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg text-text antialiased bg-dot-pattern min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
