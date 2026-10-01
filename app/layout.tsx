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
  metadataBase: new URL("https://traficargo.com.mx"),

  title: {
    default: "Traficargo Internacional",
    template: "%s | Traficargo Internacional",
  },

  description:
    "Soluciones logísticas internacionales, transporte marítimo, aéreo, terrestre, despacho aduanal y acondicionamiento de carga.",

  openGraph: {
    title: "Traficargo Internacional",
    description:
      "Soluciones estratégicas para importadores y exportadores.",
    url: "https://traficargo.com.mx",
    siteName: "Traficargo Internacional",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Traficargo Internacional",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Traficargo Internacional",
    description:
      "Soluciones estratégicas de logística internacional.",
    images: ["/opengraph-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}