import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"]
});

const RubikSans = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Veckov Portfolio",
  description: "Novak Veckov Portfolio site built with NextJS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${RubikSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
