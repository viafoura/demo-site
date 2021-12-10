import React, { useEffect, useRef } from "react";

export default function TopicFollow({ topics }) {
  const refs = useRef(topics.map(() => React.createRef()));

  useEffect(() => {
    setTimeout(() => {
      topics.map((topic, i) => {
        refs.current[i].current.querySelectorAll(
          "span"
        )[1].innerText = `+ ${topic.name}`;
      });
    }, 3000);
  }, [topics]);

  return (
    <div className="border-t border-b border-gray-300 pt-4 pb-5 mt-3 mb-8">
      <div className="text-xs font-semibold mb-3">Follow Article Topics</div>
      <div id="vf-btn-topics" className="flex">
        {topics.map((topic, i) => (
          <span ref={refs.current[i]} key={topic.id} className="mr-3">
            <div className="viafoura">
              <vf-topic-follow
                topic-id={topic.id}
                topic-name={topic.name}
                topic-type="topic"
                show-count="true"
                minimum-count="5"
              ></vf-topic-follow>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
