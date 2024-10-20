import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const {
    photo,
    handleCloseButton,
    navAtLeastOneFavCheck,
    addOrRemoveFav,
    handlePhotoClick,
    favoritesArray,
  } = props;

  const {
    id,
    user: { name: username, profile },
    urls: { full: imageSource },
    location: { city, country },
    similar_photos,
  } = photo;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseButton}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image-wrapper">
        <PhotoFavButton
          navAtLeastOneFavCheck={navAtLeastOneFavCheck}
          addOrRemoveFav={addOrRemoveFav}
          photo={photo}
          favoritesArray={favoritesArray}
        />
        <img
          className="photo-details-modal__image"
          src={imageSource}
          alt={id}
        />
      </div>

      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={profile}
            alt="User Profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{username}</p>
            <p className="photo-details-modal__photographer-location">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <h2>Similar Photos</h2>
        {similar_photos && (
          <PhotoList
            photos={Object.values(similar_photos)}
            navAtLeastOneFavCheck={navAtLeastOneFavCheck}
            addOrRemoveFav={addOrRemoveFav}
            handlePhotoClick={handlePhotoClick}
            favoritesArray={favoritesArray}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
