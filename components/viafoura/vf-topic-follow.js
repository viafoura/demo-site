import useHasMounted from "@/hooks/useHasMounted";

export default function VfTopicFollow({ topicId, topicName, topicType }) {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-topic-follow
          topic-id={topicId}
          topic-name={topicName}
          topic-type={topicType}
          show-count="true"
          minimum-count="5"
        ></vf-topic-follow>
      </div>
    )
  );
}
