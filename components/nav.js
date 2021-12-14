/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

export default function Nav({ allPosts }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 h-16 max-w-full px-4 py-3 bg-neutral-800">
      <div className="grid items-center grid-cols-6">
        <div className="col-span-1 text-left">
          <button
            className="flex items-center"
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <BiMenuAltLeft className="text-white w-7 h-7" />
          </button>
          {isMenuOpen && (
            <div className="absolute z-20 top-3 left-3 w-72">
              <div className="p-3 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="ml-2 text-xl font-bold hover:text-red-700">
                    <a href="/" aria-label="Viafoura" title="Viafoura">
                      Viafoura
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 focus:bg-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BiX className="text-center text-gray-700 w-7 h-7" />
                    </button>
                  </div>
                </div>
                <nav>
                  {allPosts.map((post) => (
                    <a
                      key={post.id}
                      href={`/posts/${post.slug}`}
                      title={post.menuName}
                      aria-label={post.menuName}
                      className="block px-3 py-2 font-medium tracking-wide text-gray-800 transition-colors duration-200 rounded cursor-pointer hover:bg-gray-100 hover:text-red-700"
                    >
                      {post.menuName}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="w-40 h-8 col-span-4 mx-auto">
          <a href="/" title="Viafoura" aria-label="Viafoura">
            <Image
              width={160}
              height={32}
              src="/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <div className="flex justify-end h-10 col-span-1 bg-gray-300 viafoura">
          <vf-tray-trigger />
        </div>
      </div>
    </nav>
  );
}
