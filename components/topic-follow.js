import React, { useEffect, useRef } from "react";

export default function TopicFollow({ topics }) {
  return (
    <div className="pt-4 pb-5 mt-3 mb-8 border-t border-b border-gray-300">
      <div className="mb-3 text-xs font-semibold">Follow Article Topics</div>
      <div id="vf-btn-topics" className="flex">
        {topics.map((topic) => (
          <div key={topic.id} className="flex mr-3">
            <div className="mr-2 font-semibold text-neutral-600">
              {topic.name}
            </div>
            <div className="pr-1 not-prose">
              <div className="viafoura">
                <vf-topic-follow
                  topic-id={topic.id}
                  topic-name={topic.name}
                  topic-type="topic"
                  show-count="true"
                  minimum-count="5"
                ></vf-topic-follow>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
