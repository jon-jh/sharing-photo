import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    topics,
    photos,
    navAtLeastOneFavCheck,
    photoSelected,
    handlePhotoClick,
    handleCloseButton,
    addOrRemoveFav,
    loadTopicPhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        navAtLeastOneFavCheck={navAtLeastOneFavCheck}
        addOrRemoveFav={addOrRemoveFav}
        handlePhotoClick={handlePhotoClick}
        loadTopicPhotos={loadTopicPhotos}
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
