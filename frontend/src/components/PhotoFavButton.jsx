import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favButton, toggleFavState] = useState(false);
  // const navAtLeastOneFavCheck = props.navAtLeastOneFavCheck; (not using?)
  const addOrRemoveFav = props.addOrRemoveFav;
  const id = props.id;

  const handleFav = () => {
    toggleFavState(!favButton);
    addOrRemoveFav(id, favButton);
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
