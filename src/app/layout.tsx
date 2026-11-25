import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: {
    default: "Neurovix | Desarrollo de Software a la medida",
    template: "%s | Neurovix",
  },
  description:
    "Desarrollo de software a la medida, apps móviles, automatización de procesos e inteligencia artificial para empresas en México y Estados Unidos.",
  icons: {
    icon: "/icons/neurovix_n.png",
    apple: "/icons/neurovix_n.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the default dark theme regardless of the OS preference.
  themeColor: "#090909",
};

// Runs before first paint. Dark is the default (same as the store); a saved choice wins.
// The key is site-specific so a "theme" value left by another app on the same origin
// (e.g. localhost:3000) can't override the default.
const themeScript = `(function(){try{var t=localStorage.getItem("neurovix-theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappIcon />
      </body>
    </html>
  );
}
