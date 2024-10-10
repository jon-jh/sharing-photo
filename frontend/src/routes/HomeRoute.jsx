import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, isFavPhoto, isFavPhotoExist } = props;
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList photos={photos} isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default HomeRoute;
