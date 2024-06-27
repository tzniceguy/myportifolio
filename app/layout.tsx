import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio",
  description: "about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space.className} flex min-h-screen flex-col gap-4 md:px-72  dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
