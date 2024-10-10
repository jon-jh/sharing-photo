import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, handleCloseButton } = props;
  // Log the photo details to the console
  console.log(photo);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseButton}><img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
