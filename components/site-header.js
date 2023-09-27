import MainNav from "./main-nav";
import { siteConfig } from "@/config/site";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 z-50 w-full border-b bg-green-900 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        {/* <MobileNav /> */}
      </div>
    </header>
  );
}
