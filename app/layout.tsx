import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import PageTitle from "@/components/display-title";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tzniceguy",
  description: "portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${space.className} min-h-screen py-12 px-8 md:px-52 dark:bg-marshland-950 dark:text-gray-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1 py-12">
            <header className="mb-8">
              <PageTitle />
              <NavBar />
            </header>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
