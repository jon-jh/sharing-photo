import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country }
  } = props.photoData;
  const navAtLeastOneFavCheck = props.navAtLeastOneFavCheck;
  const addPhotoToFavorites = props.addPhotoToFavorites;
  const addOrRemoveFav = props.addOrRemoveFav;
  const handlePhotoClick = props.handlePhotoClick;

  return (
    <div>
      <div className="photo-list__item" key={id} >
        
        <PhotoFavButton navAtLeastOneFavCheck={navAtLeastOneFavCheck} addPhotoToFavorites={addPhotoToFavorites} addOrRemoveFav={addOrRemoveFav} id={id} />
        
      <img className="photo-list__image" src={imageSource} alt="Photo" onClick={() => handlePhotoClick(props.photoData)} />

        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={profile} />
          <div className="photo-list__user-info">
            <p>{username}</p>
            <p className="photo-list__user-location">{city}, {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
