import Navbar from "@/components/Header/Navbar";
import SiteInfo from "@/components/Header/SiteInfo";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher";
import { Inter, Cookie } from "next/font/google";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <SiteInfo  />
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          <Navbar />
        </nav>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
