import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { MouseCursor } from "@/components/ui/MouseCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray Yap",
  description: "Personal portfolio website showcasing my projects and experience in software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-[#0a192f]`}
        style={{ backgroundColor: '#0a192f' }}
      >
        <MouseCursor />
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-neutral-600">
          <p>
            Built by Ray (Zhan Rui) Yap using <span className="text-accent">Next.js</span>  + <span className="text-accent">Tailwind CSS</span>. Design inspired by{' '}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              brittanychiang.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
