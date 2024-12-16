import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const geistPoppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500']
});

const geistUbuntu = Ubuntu({
  variable: "--font-geist-ubuntu",
  subsets: ["latin"],
  weight: ['300', '400', '500']
});

export const metadata: Metadata = {
  title: "Task Management App.",
  description: "Test Assignment for Palm Outsourcing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPoppins.variable} ${geistUbuntu.variable} antialiased font-[poppins] bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
