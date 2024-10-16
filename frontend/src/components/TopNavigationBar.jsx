import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const topics = props.topics;
  const navAtLeastOneFavCheck = props.navAtLeastOneFavCheck;
  return (
    <div className="top-nav-bar">
      <FavBadge navAtLeastOneFavCheck={navAtLeastOneFavCheck} />
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      
      
    </div>
  )
}

export default TopNavigation;