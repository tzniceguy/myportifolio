import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
        className={`${space.className} flex min-h-screen space-y-6  py-12 px-4 flex-col gap-4 md:px-72 md:text-xl dark:bg-marshland-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="space-y-6  py-12">
            <div className="space-y-6">
              <h1 className="font-semibold text-2xl">work</h1>
              <div>
                <NavBar />
              </div>
            </div>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
