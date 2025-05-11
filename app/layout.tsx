import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from 'next/script';
import { IubendaCookies } from "@/components/IubendaCookies";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Fantastech",
  description: "Fantastic solutions for smart businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <IubendaCookies />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
