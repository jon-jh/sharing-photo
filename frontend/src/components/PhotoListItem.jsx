import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  // After moving it to app.js, it became (props)
  // Destructure the sample data object
  const { id, location, imageSource, username, profile } = props.data;
  
  return (
    <div>
      <img src = {imageSource} />
      <img src = {profile} />
      {id}
      {location.city}
      {location.country}
      {username}
    </div>
  )

};

export default PhotoListItem;
