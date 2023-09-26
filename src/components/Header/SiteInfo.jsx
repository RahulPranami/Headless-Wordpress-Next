import { Lobster } from "next/font/google";
import Link from "next/link";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function SiteInfo() {
  // Remove this extra div afterwards
  return (
    <div className={lobster.className}>
      <Link href="/" className="ml-4 lg:ml-0">
        <h1 className="text-xl font-bold">Headless Wordpress</h1>
        <p className="text-xs">Just another Site</p>
      </Link>
    </div>
  );
}
