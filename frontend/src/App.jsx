import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {
  const [isFavPhoto, isFavPhotoExist] = useState(false);
  const [favoritesArray, modifyfavoritesArray] = useState([]);

  const addOrRemoveFav = (id, state) => {
    state
      ? modifyfavoritesArray(currentFavs => currentFavs.filter(fav => Number(fav.id) !== Number(id) + 1))
      : modifyfavoritesArray(currentFavs => [...currentFavs, photos[id]]);
  };

  useEffect(() => {
    console.log('Favorite Photos Array:', favoritesArray);
  }, [favoritesArray]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        isFavPhotoExist={isFavPhotoExist}
        isFavPhoto={isFavPhoto}
        addOrRemoveFav={addOrRemoveFav}
      />
    </div>
  );
};

export default App;
