import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    navAtLeastOneFavCheck,
    photoSelected,
    handlePhotoClick,
    handleCloseButton,
    addOrRemoveFav
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        navAtLeastOneFavCheck={navAtLeastOneFavCheck}
        addOrRemoveFav={addOrRemoveFav}
        handlePhotoClick={handlePhotoClick}
      />
      {photoSelected && (
        <PhotoDetailsModal photo={photoSelected}
          handleCloseButton={handleCloseButton}
          photos={photos}
          navAtLeastOneFavCheck={navAtLeastOneFavCheck}
          addOrRemoveFav={addOrRemoveFav}
          handlePhotoClick={handlePhotoClick}
        />
      )}
    </div>
  );
};

export default App;
