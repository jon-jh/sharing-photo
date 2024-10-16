import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { loadTopicPhotos, topics } = props;

  const handleClick = () => {
    console.log(topics.title);
    loadTopicPhotos(topics.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{topics.title}</span>
    </div>
  );
};

export default TopicListItem;
