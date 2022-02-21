/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";

import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { gqlSalesMenu } from "@/graphql/gqlSalesMenu";

export default function SalesMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMenuItems = async () => {
      const { allPosts } = await fetchGraphQL({ query: gqlSalesMenu });
      setData(allPosts);
    };
    getMenuItems();
  }, []);

  return (
    data && (
      <div className="flex h-10 w-10">
        <button className="flex items-center" title="Open Menu" onClick={() => setIsMenuOpen(true)}>
          <BiMenuAltLeft className="h-8 w-8 text-white" />
        </button>
        {isMenuOpen && (
          <div className="relative top-2 -left-[30px] z-20">
            <div className="w-80 rounded border bg-white p-3 pb-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-2 flex items-center justify-between">
                <div className="ml-2 text-xl font-bold hover:text-red-700 dark:text-white">
                  <a href="/" title="Viafoura">
                    Viafoura
                  </a>
                </div>
                <div>
                  <button
                    title="Close Menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-neutral-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BiX className="h-7 w-7 text-center text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
              <nav>
                {data.map((menuItem) => (
                  <a
                    key={menuItem.id}
                    href={`/posts/${menuItem.slug}`}
                    title={menuItem.productDemo}
                    className="broadcast-notification-link"
                  >
                    {menuItem.productDemo}
                  </a>
                ))}
                <a
                  href="/broadcast-notification"
                  title="Broadcast Notification"
                  className="broadcast-notification-link"
                >
                  Broadcast Notification
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    )
  );
}
