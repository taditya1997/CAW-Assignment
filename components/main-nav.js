import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MainNav() {
  return (
    <div className="mr-4 hidden md:flex justify-between w-full text-white">
      <div className="flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" alt="logo" className="h-60 w-60" />
        </Link>
        <nav className="ml-10 flex items-center gap-60 text-sm font-medium">
          {siteConfig.navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
        <div className="flex items-center gap-60">
            <span>Cart Icon</span>
            <span>Hello, James</span>
        </div>
    </div>
  );
}
