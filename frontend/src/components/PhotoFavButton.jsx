import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, toggleFavState] = useState(false)
  const isFavPhotoExist = props.isFavPhotoExist;
  const addPhotoToFavorites = props.addPhotoToFavorites;
  const id = props.id;

  const handleFav = () => {
    favButton ? toggleFavState(false) : toggleFavState(true);
    alert(favButton)
    // will alert the true or false state of the clicked button
    isFavPhotoExist(true);
    addPhotoToFavorites(id) // add the photo to the array
  }
  

  return (
    <div className="photo-list__fav-icon" onClick={handleFav}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={favButton}></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;