import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoffeeCoders Games Hub",
  description: "Search the CoffeeCoders library and play small games built over coffee.",
};

export const viewport: Viewport = {
  themeColor: "#14100e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Theme appearance="dark" accentColor="bronze" grayColor="sand" radius="large" panelBackground="solid">
          {children}
        </Theme>
      </body>
    </html>
  );
}
