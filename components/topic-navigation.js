export default function TopicNavigation({ allTopics }) {
  return (
    <div className="flex items-center justify-center h-14 text-gray-500 bg-gray-100 uppercase text-sm border-b-[1px] border-gray-200">
      Topics:{" "}
      {allTopics.map((topic) => (
        <span className="pl-5 font-semibold text-gray-600" key={topic.id}>
          {topic.name}
        </span>
      ))}
    </div>
  );
}
