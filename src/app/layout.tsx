import type { Metadata } from "next";
import About from "./components/About";
import Choose from "./components/Choose";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braintechh Engineers Private Limited",
  description: "Leading industrial solutions provider with decades of experience in power plant maintenance, engineering consultancy, and project services.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>       
      </body>
    </html>
  );
}
