export default function TopicMenu({ allTopics }) {
  return (
    <div className="flex items-center justify-center -ml-5 h-14 text-gray-500 bg-gray-100 uppercase text-sm border-b-[1px] border-gray-200">
      {allTopics.map((topic) => (
        <a
          key={topic.id}
          href={`/topics/${topic.slug}`}
          className="ml-5 font-semibold text-gray-600 hover:underline"
        >
          {topic.name}
        </a>
      ))}
    </div>
  );
}
