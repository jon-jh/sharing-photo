import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <h3>{props.topicData.title}</h3>
    </div>
  );
};

export default TopicListItem;
