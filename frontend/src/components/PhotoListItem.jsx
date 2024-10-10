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
  const isFavPhotoExist = props.isFavPhotoExist;
  const addPhotoToFavorites = props.addPhotoToFavorites;

  return (
    <div>
      <div className="photo-list__item" key={id}>
        <PhotoFavButton isFavPhotoExist={isFavPhotoExist} addPhotoToFavorites={addPhotoToFavorites}/>
        <img className="photo-list__image" src={imageSource} alt="Photo" />
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
