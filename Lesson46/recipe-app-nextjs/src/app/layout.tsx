import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "The best recipes on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const darkModeBg = 'dark:from-gray-800 dark:to-gray-900';
  const lightModeBg = 'from-gray-50 to-gray-200';
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b ${lightModeBg} ${darkModeBg} min-h-svh`}
      >
        <UserProvider>
          <Navbar />
          <div className="max-w-6xl mx-auto p-8">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
