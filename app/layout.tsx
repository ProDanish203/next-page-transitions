import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Page Transition Animations",
  description: "Page transition animations with Next.js and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <ReactLenis root>
        <html lang="en">
          <body
            className={`antialiased overflow-x-clip ${poppins.className} ${roboto.variable}`}
          >
            <Navbar />
            {children}
          </body>
        </html>
      </ReactLenis>
    </ViewTransitions>
  );
}
