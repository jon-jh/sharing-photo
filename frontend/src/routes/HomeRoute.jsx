import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    navAtLeastOneFavCheck,
    addOrRemoveFav,
    handlePhotoClick
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} navAtLeastOneFavCheck={navAtLeastOneFavCheck} />
      <PhotoList
        photos={photos}
        navAtLeastOneFavCheck={navAtLeastOneFavCheck}
        addOrRemoveFav={addOrRemoveFav}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
