import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ChatBot from "../components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubh Milan | Matrimonial Service in Amritsar",
  description:
    "Shubh Milan is a trusted matrimonial service in Amritsar offering verified profiles, love-to-arrange consultation and personal matchmaking for families.",
  keywords: [
    "Matrimonial service in Amritsar",
    "Marriage bureau Amritsar",
    "Punjabi matrimony",
    "Love to arrange marriage",
    "Verified marriage profiles",
  ],
  authors: [{ name: "Shubh Milan Team" }],
  openGraph: {
    title: "Shubh Milan | Trusted Matrimony in Amritsar",
    description:
      "Find verified matrimonial matches with tradition and trust at Shubh Milan.",
    url: "https://yourdomain.com", // Change after deployment
    siteName: "Shubh Milan",
    type: "website",
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
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  );
}
