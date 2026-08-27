import { useEffect, useState } from "react";

import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { gqlTopicsMenu } from "@/graphql/gqlTopicsMenu";

export default function TopicsMenu() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getTopics = async () => {
      const { allTopics } = await fetchGraphQL({ query: gqlTopicsMenu });
      setData(allTopics);
    };
    getTopics();
  }, []);

  return (
    <div className="h-14 overflow-x-auto border-b-[1px] border-gray-200 bg-gray-100 text-sm uppercase text-gray-500 dark:border-neutral-700 dark:bg-[#1A1A1A]">
      <div className="mx-auto flex h-full w-max items-center gap-5 px-5">
        {data &&
          data.map((topic) => (
            <a
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="whitespace-nowrap font-semibold text-gray-600 hover:underline dark:text-white"
            >
              {topic.name}
            </a>
          ))}
      </div>
    </div>
  );
}
