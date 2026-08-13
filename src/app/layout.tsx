import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { HeaderContainer } from "@/components/HeaderContainer";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PageLoader } from "@/components/PageLoader";
import { FloatingContactButton } from "@/components/FloatingContactButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://smsg.au"),
  title: {
    default: "Specialist Medical Services Group",
    template: "%s | SMSG",
  },
  description:
    "Independent practitioners delivering specialised care across three southern Sydney centres: Earlwood, Bangor, and Sans Souci.",
  // Favicon is served via the file convention at src/app/icon.png
  // Pre-launch: block indexing sitewide. Flip to `index: true, follow: true`
  // (and update src/app/robots.ts) when Sim greenlights launch.
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EEE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="no-js">
      <head>
        {/*
          Fonts are loaded exactly as the source static site does — same
          Google Fonts URL, same weight range (Fraunces 300..700 + italic +
          opsz/SOFT/WONK axes; Instrument Sans 400..600 + italic). Using a
          direct <link> instead of next/font guarantees pixel identity
          with the approved templates.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..700,0..100,0..1;1,9..144,300..700,0..100,0..1&family=Instrument+Sans:ital,wght@0,400..600;1,400..600&display=swap"
        />
      </head>
      <body>
        <Script id="no-js-remover" strategy="beforeInteractive">
          {`document.documentElement.classList.remove('no-js');`}
        </Script>
        <HeaderContainer>
          <SiteHeader />
        </HeaderContainer>
        <main>{children}</main>
        <SiteFooter />
        <FloatingContactButton />
        <RevealOnScroll />
        <PageLoader />
      </body>
    </html>
  );
}
