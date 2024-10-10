import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, toggleFavState] = useState(false)
  const isFavPhotoExist = props.isFavPhotoExist;
  const handleFav = () => {
    favButton ? toggleFavState(false) : toggleFavState(true);
    alert(favButton)
    // will alert the true or false state of the clicked button
    isFavPhotoExist(true);
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