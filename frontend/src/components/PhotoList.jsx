import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = (props) => {
  const {
    photos,
    navAtLeastOneFavCheck,
    addOrRemoveFav,
    handlePhotoClick,
    favoritesArray,
  } = props;

  const photoPopulator = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photoData={photo}
      navAtLeastOneFavCheck={navAtLeastOneFavCheck}
      addOrRemoveFav={addOrRemoveFav}
      handlePhotoClick={handlePhotoClick}
      favoritesArray={favoritesArray}
    />
  ));

  return <ul className="photo-list">{photoPopulator}</ul>;
};

export default PhotoList;
