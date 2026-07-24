import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brianna Morales Ruiz | Cybersecurity GRC Professional",
  description: "Portfolio of Brianna Morales Ruiz, specializing in Cybersecurity Governance, Risk & Compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
