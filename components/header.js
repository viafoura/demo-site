/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

import SalesMenu from "@/components/sales-menu";
import VfTrayTrigger from "@/components/vf-tray-trigger";

export default function Header({ allPosts }) {
  return (
    <nav className="sticky top-0 z-10 h-16 max-w-full px-4 py-3 bg-neutral-800">
      <div className="flex items-center max-w-6xl mx-auto">
        <SalesMenu allPosts={allPosts} />
        <div className="w-[150px] h-[30px] mx-auto">
          <a href="/" title="Viafoura" aria-label="Viafoura">
            <Image
              width={150}
              height={30}
              src="/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-700 hover:bg-neutral-600">
          <VfTrayTrigger />
        </div>
      </div>
    </nav>
  );
}
