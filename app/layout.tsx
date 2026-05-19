import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Fantastech",
	description: "AI | Custom software development | Guatemala",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children as React.ReactElement;
}
