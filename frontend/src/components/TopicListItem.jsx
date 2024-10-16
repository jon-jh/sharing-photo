import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={props.onClick}>
      <h3>{props.topics.title}</h3>
    </div>
  );
};

export default TopicListItem;
