import React from "react";
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, navAtLeastOneFavCheck, loadTopicPhotos } = props;

  return (
    <div className="top-nav-bar">
      <FavBadge navAtLeastOneFavCheck={navAtLeastOneFavCheck} />
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} loadTopicPhotos={loadTopicPhotos} />
      
    </div>
  );
};

export default TopNavigation;
