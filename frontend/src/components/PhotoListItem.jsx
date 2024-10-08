import React from "react";

import "../styles/PhotoListItem.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  /* Insert React */
  // Destructure the sample data object
  const { id, location, imageSource, username, profile } = sampleDataForPhotoListItem;
  
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
