/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

import SalesMenu from "@/components/sales-menu";
import VfTrayTrigger from "@/components/vf-tray-trigger";

export default function Header({ allPosts }) {
  return (
    <nav className="sticky top-0 z-10 h-16 max-w-full bg-neutral-800 px-4 py-3 dark:bg-[#090909]">
      <div className="mx-auto flex max-w-6xl items-center">
        <SalesMenu allPosts={allPosts} />
        <div className="mx-auto h-[30px] w-[150px]">
          <a href="/" title="Viafoura" aria-label="Viafoura">
            <Image
              width={150}
              height={30}
              src="/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <div className="h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-600">
          <VfTrayTrigger />
        </div>
      </div>
    </nav>
  );
}
