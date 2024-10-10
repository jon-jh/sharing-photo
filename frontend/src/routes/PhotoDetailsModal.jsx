import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, handleCloseButton } = props;
  const { id, user: { name: username, profile }, urls: { full: imageSource }, location: { city, country } } = photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseButton}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__images">
          <img className="photo-details-modal__image" src={imageSource} alt="Photo" />
        </div>
        <div className="photo-details-modal__header">
          <img className="photo-details-modal__profile" src={profile} alt="User Profile" />
          <div className="photo-details-modal__info">
            <p>ID: {id}</p>
            <p>Username: {username}</p>
            <p>Location: {city}, {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
