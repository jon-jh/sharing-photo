import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile, index } = props.photoData;

  return (
    <div>
      <div className="photo-list__item" key={id}>
        <PhotoFavButton key={id} />
      <img className="photo-list__image" src={imageSource} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoListItem;
