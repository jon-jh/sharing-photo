import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props.photoData;
  return (
    <div>
      <img className="photo-list__image" src={imageSource} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="Profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
