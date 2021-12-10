export default function PostTopics({ topics }) {
  return (
    <div className="mt-10">
      {topics.map((topic) => (
        <span key={topic.id} className="uppercase mr-4 text-sm text-gray-600">
          {topic.name}
        </span>
      ))}
    </div>
  );
}
