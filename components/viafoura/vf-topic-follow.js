export default function VfTopicFollow({ vfTopicContainerId, topicName, topicType }) {
  return (
    <div className="viafoura">
      <vf-topic-follow
        topic-id={vfTopicContainerId}
        topic-name={topicName}
        topic-type={topicType}
        show-count="true"
        minimum-count="5"
      />
    </div>
  );
}
