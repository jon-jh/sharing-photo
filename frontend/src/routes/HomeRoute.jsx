import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const topics = props.topics;
  const photos = props.photos;
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
