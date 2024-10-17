import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, toggleFavState] = useState(false);
  const addOrRemoveFav = props.addOrRemoveFav;
  const photo = props.photo;

  const handleFav = () => {
    toggleFavState(!favButton);
    console.log('handleFav called with photo:', photo);
    addOrRemoveFav(photo, favButton);
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
