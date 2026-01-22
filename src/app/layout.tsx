import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Desh Realty - Your Trusted Real Estate Partner in Bangladesh",
  description: "Find your dream property in Bangladesh with Desh Realty. We offer the best selection of houses, apartments, and land for sale and rent.",
  keywords: "real estate, Bangladesh, Dhaka, property, house, apartment, land, buy, rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
