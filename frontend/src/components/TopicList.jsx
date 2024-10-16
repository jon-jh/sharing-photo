import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  const topics = props.topics;

  const handleClick = (id) => {
    console.log(`Topic with id ${id} clicked`);
    // Add your custom logic here
  };

  const populateTopicList = topics.map(topic => (
    <TopicListItem key={topic.id} topics={topic} onClick={() => handleClick(topic.id)} />
  ))
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {populateTopicList}
    </div>
  );
};

export default TopicList;
