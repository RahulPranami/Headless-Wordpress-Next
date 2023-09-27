import Link from "next/link";
import { client } from "@/lib/apollo";
import he from "he";
import Navbar from "@/components/Header/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher";
import { getMenu, getSiteInfo } from "@/lib/queries";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default async function Header() {
  const {
    data: { menuItems },
    loading: menuLoading,
  } = await client.query({
    query: getMenu,
  });

  const {
    data: {
      generalSettings: { title, description },
    },
    loading: infoLoading,
  } = await client.query({
    query: getSiteInfo,
  });

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className={`flex items-center ${lobster.className}`}>
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">
              {he.decode(title) || "Headless Wordpress"}
            </h1>
            <p className="text-xs">
              {he.decode(description) || "Just another Site"}
            </p>
          </Link>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          <Navbar menuItems={menuItems.edges} className={lobster.className} />
        </nav>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
