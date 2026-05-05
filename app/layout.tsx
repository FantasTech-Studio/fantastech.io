import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fantastech",
  description: "Fantastic solutions for smart businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
