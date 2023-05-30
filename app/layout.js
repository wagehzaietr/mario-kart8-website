"use client";

import "./globals.css";
import { Bungee } from "next/font/google";
import Navbar from "@/components/Navbar";
import Characters from "@/components/Characters";
import Features from "@/components/Features";
import { AnimatePresence } from "framer-motion";
import PowerUpsSection from "@/components/PowerUpsSection";
import Tracks from "@/components/Tracks";
import BuyNow from "@/components/BuyNow";
import GoUp from "@/components/GoUp";

const retro = Bungee({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${retro.className}`}>
        <Navbar />
        <GoUp />
        {children}
        <Characters />
        <Features />
        <PowerUpsSection />
        <Tracks />
        <BuyNow />
      </body>
    </html>
  );
}
