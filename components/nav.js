/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

export default function Nav({ allPosts }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky z-10 top-0 max-w-full h-16 px-4 py-3 bg-nav">
      <div className="grid grid-cols-6 items-center">
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
                  <div className="text-xl ml-2 font-bold hover:text-red-700">
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
                      <BiX className="w-7 h-7 text-center text-gray-700" />
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
                      className="block cursor-pointer font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                    >
                      {post.menuName}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-4 mx-auto w-40 h-8">
          <a href="/" title="Viafoura" aria-label="Viafoura">
            <Image
              width={160}
              height={32}
              src="/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <div className="viafoura col-span-1 h-10 flex justify-end bg-gray-300">
          <vf-tray-trigger />
        </div>
      </div>
    </nav>
  );
}
