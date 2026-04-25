import type { Metadata, Viewport } from "next";
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
  title: "Sebastian Arias | Software Developer",
  description: "Especialista en el T3 Stack: Next.js, Supabase, Tailwind y TypeScript.",
};

export const viewport: Viewport = {
  themeColor: "#000000"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100 selection:text-blue-900`}
    >
      <body className="font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}