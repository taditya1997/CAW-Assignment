import SiteHeader from "@/components/site-header";
import "./globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "../config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          {/* <SiteFooter /> */}
        </div>
      </body>
    </html>
  );
}
