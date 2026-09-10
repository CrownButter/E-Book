import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Book",
  description: "Simple E-Book platform MVP",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
