import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, setFavButton] = useState(false);
  const addOrRemoveFav = props.addOrRemoveFav;
  const photo = props.photo;
  const favoritesArray = props.favoritesArray

  useEffect(() => {
    setFavButton(props.favoritesArray.some(fav => fav.id === photo.id));
  }, [props.favoritesArray, photo.id]);

  const handleFav = () => {
    addOrRemoveFav(photo, favButton);
    setFavButton(!favButton);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favButton}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;
