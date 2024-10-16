import React from "react";
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, favPhotoArray, loadTopicPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} loadTopicPhotos={loadTopicPhotos} />
      <FavBadge favPhotoArray={favPhotoArray} />
    </div>
  );
};

export default TopNavigation;
