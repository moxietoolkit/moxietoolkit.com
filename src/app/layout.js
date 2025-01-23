import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Fathom from "./utils/fathom";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moxie Toolkit",
  description: "Rules and more for games 'Made with Moxie'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-grimwild-light text-grimwild-dark min-h-screen flex items-center justify-center`}
      >
        <Fathom />
        {children}
      </body>
    </html>
  );
}
