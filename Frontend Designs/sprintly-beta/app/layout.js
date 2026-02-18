import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark, neobrutalism } from "@clerk/themes";
import { Toaster } from "sonner";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Sprintly-Beta",
  description: "Agile development and workflow platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
        baseTheme: dark, // Enable dark mode
        layout: {
          logoImageUrl: "/sprintly-purple-icon.png",
          logoPlacement: "inside",
        },
      }}
    >

      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.variable} antialiased font-outfit`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {/* header */}
            <Header />

            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
