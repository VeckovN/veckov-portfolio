import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/data/PersonalSchema";

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
  title: "Novak Veckov | Full Stack Developer",
  description:
    "Novak Veckov – Full Stack Developer from Serbia. Portfolio showcasing projects, skills, and experience in modern web development.",
  keywords: [
    "Novak Veckov",
    "Veckov",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Serbia Developer"
  ],
  authors: [{ name: "Novak Veckov" }],
  creator: "Novak Veckov",
  openGraph: {
    title: "Novak Veckov | Full Stack Developer",
    description:
      "Portfolio of Novak Veckov, Full Stack Developer specializing in modern web technologies.",
    url: "https://veckov-portfolio.vercel.app/",
    siteName: "Novak Veckov Portfolio",
    type: "website",
  },
  robots: {
    index: true,   
    follow: true,     
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonSchema/>
      </head>
      <body className={`${interSans.variable} ${RubikSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
