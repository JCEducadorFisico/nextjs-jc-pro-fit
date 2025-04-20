import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JC Fit Pro",
  description: "Transforme-se com o JC Fit Pro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
