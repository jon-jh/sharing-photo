import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [favoritesArray, modifyFavoritesArray] = useState([]);
  // 0. declare the state of the photo (is it selected?)
  const [photoSelected, setSelectedPhoto] = useState(null)
  // 1. declare the photo click handler to open the modal/popup. This is passed down to the homeroute component.
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo)
    console.log('You clicked a photo')
  };

  // declare the state handler for the close button on the modal/
  const handleCloseButton = () => {
    setSelectedPhoto(null)
    console.log('The modal close button was clicked')
  };

  const addOrRemoveFav = (id, state) => {
    if (state) {
      modifyFavoritesArray(currentFavs => {
        const updatedFavs = currentFavs.filter(fav => Number(fav.id) !== Number(id) + 1);
        console.log('Updated favoritesArray (REMOVAL):', updatedFavs);
        return updatedFavs;
      });
    } else {
      modifyFavoritesArray(currentFavs => {
        const updatedFavs = [...currentFavs, photos[id]];
        console.log('Updated favoritesArray (ADDITION):', updatedFavs);
        return updatedFavs;
      });
    }
  };

  useEffect(() => {
    console.log('favoritesArray length:', favoritesArray.length);
    setIsFavPhotoExist(favoritesArray.length > 0);
  }, [favoritesArray]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        isFavPhotoExist={isFavPhotoExist}
        addOrRemoveFav={addOrRemoveFav}
        handlePhotoClick={handlePhotoClick}
      />
      {photoSelected && (
        <PhotoDetailsModal photo={photoSelected} handleCloseButton={handleCloseButton}/>
      )}
    </div>
  );
};

export default App;
