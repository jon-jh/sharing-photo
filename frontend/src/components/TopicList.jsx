import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, loadTopicPhotos } = props;

  const topicListArray = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      topics={topic}
      loadTopicPhotos={loadTopicPhotos}
    />
  ));

  return <div className="top-nav-bar__topic-list">{topicListArray}</div>;
};

export default TopicList;
