import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio Lucas Perez",
  description:
    "Portfolio de Lucas Perez - Développeur web passionné par la création de sites et applications modernes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
