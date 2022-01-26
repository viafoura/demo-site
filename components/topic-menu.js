export default function TopicMenu({ allTopics }) {
  return (
    <div className="-ml-5 flex h-14 items-center justify-center border-b-[1px] border-gray-200 bg-gray-100 text-sm uppercase text-gray-500 dark:border-neutral-700 dark:bg-[#1A1A1A]">
      {allTopics.map((topic) => (
        <a
          key={topic.id}
          href={`/topics/${topic.slug}`}
          className="ml-5 font-semibold text-gray-600 hover:underline dark:text-white"
        >
          {topic.name}
        </a>
      ))}
    </div>
  );
}
