import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from 'mocks/topics';

const App = () => {
  const [isFavPhoto, setIsFavPhotoExist] = useState(false);
  const [favoritesArray, modifyFavoritesArray] = useState([]);

  const addOrRemoveFav = (id, state) => {
    state
      ? modifyFavoritesArray(currentFavs => currentFavs.filter(fav => Number(fav.id) !== Number(id) + 1))
      : modifyFavoritesArray(currentFavs => [...currentFavs, photos[id]]);
  };

  useEffect(() => {
    console.log('Favorite Photos Array:', favoritesArray);
    setIsFavPhotoExist(favoritesArray.length > 0);
  }, [favoritesArray]);
  
  // notes for future reference
  // isFavPhotoExist is now being passed from and controlled by setIsFavPhotoExist
  // the useEffect hook runs any time favoritesArray changes
  // When favoritesArray changes, the useEffect hook updates isFavPhoto using setIsFavPhotoExist.
  // it updates isFavPhoto to true if favoritesArray has at least 1 item
  // in the css for FavBadge which imports the FavIcon, if isFavPhotoExist is true it will display the notification icon, else it will not.
  

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        isFavPhotoExist={setIsFavPhotoExist}
        isFavPhoto={isFavPhoto}
        addOrRemoveFav={addOrRemoveFav}
      />
    </div>
  );
};

export default App;
