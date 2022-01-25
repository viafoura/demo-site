export default function PostTopics({ topics }) {
  return (
    <div>
      {topics.map((topic) => (
        <span key={topic.id} className="mr-4 text-sm text-gray-600 dark:text-gray-300 uppercase">
          {topic.name}
        </span>
      ))}
    </div>
  );
}
