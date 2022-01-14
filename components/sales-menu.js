/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

export default function SalesMenu({ allPosts }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    ...allPosts,
    {
      id: 99999999,
      slug: "broadcast-notification",
      productDemo: "Broadcast Notification",
    },
  ];

  return (
    <div className="flex w-10 h-10">
      <button
        className="flex items-center"
        aria-label="Open Menu"
        title="Open Menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <BiMenuAltLeft className="w-8 h-8 text-white" />
      </button>
      {isMenuOpen && (
        <div className="relative z-20 top-2 -left-[30px]">
          <div className="p-3 pb-5 bg-white border rounded shadow-sm w-80">
            <div className="flex items-center justify-between mb-2">
              <div className="ml-2 text-xl font-bold hover:text-red-700">
                <a href="/" aria-label="Viafoura" title="Viafoura">
                  Viafoura
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BiX className="text-center text-gray-700 w-7 h-7" />
                </button>
              </div>
            </div>
            <nav>
              {menuItems.map(
                (menuItem) =>
                  menuItem.productDemo && (
                    <a
                      key={menuItem.id}
                      href={`/posts/${menuItem.slug}`}
                      title={menuItem.productDemo}
                      aria-label={menuItem.productDemo}
                      className="block px-3 py-2 font-medium tracking-wide text-gray-800 transition-colors duration-200 rounded cursor-pointer hover:bg-gray-100 hover:text-red-700"
                    >
                      {menuItem.productDemo}
                    </a>
                  )
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
