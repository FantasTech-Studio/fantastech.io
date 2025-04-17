import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { IubendaCookies } from "@/components/IubendaCookies";

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
      <body className={inter.className}>
        <GoogleAnalytics />
        <IubendaCookies />
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
