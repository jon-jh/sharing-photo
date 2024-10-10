import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    isFavPhoto,
    isFavPhotoExist,
    addOrRemoveFav
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhoto={isFavPhoto} />
      <PhotoList
        photos={photos}
        isFavPhotoExist={isFavPhotoExist}
        addOrRemoveFav={addOrRemoveFav}
      />
    </div>
  );
};

export default HomeRoute;
