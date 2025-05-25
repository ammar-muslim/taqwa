import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";


const cairo = Cairo({
  subsets: ["arabic"],
  weight: "400", variable: "--font-lalezar"});


export const metadata: Metadata = {
  title: "Taqwa - الموقع الإسلامي الشامل",
  description: "موقع يحتوي على مواعيد الصلاة، مقاطع قرآنية، مقالات إسلامية وكتب وأذكار.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={cairo.className} suppressHydrationWarning>
      <body className="font-cairo antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
  
}
