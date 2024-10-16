import { useReducer, useEffect } from "react";
import photos from "mocks/photos";
import { SET_SELECTED_PHOTO, CLOSE_PHOTO, ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes';

const initialState = {
  navAtLeastOneFavCheck: false,
  favoritesArray: [],
  photoSelected: null,
};



function reducer(state, action) {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return { ...state, photoSelected: action.payload };
    case CLOSE_PHOTO:
      return { ...state, photoSelected: null };
    case ADD_FAVORITE:
      const updatedFavsAdd = [...state.favoritesArray, photos[action.payload]];
      return { ...state, favoritesArray: updatedFavsAdd, navAtLeastOneFavCheck: updatedFavsAdd.length > 0 };
    case REMOVE_FAVORITE:
      const updatedFavsRemove = state.favoritesArray.filter(fav => Number(fav.id) !== Number(action.payload) + 1);
      return { ...state, favoritesArray: updatedFavsRemove, navAtLeastOneFavCheck: updatedFavsRemove.length > 0 };
    default:
      throw new Error('Unknown action type');
  }
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoClick = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
    console.log('You clicked a photo');
  };

  const handleCloseButton = () => {
    dispatch({ type: 'CLOSE_PHOTO' });
    console.log('The modal close button was clicked');
  };

  const addOrRemoveFav = (id, isFavorite) => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
      console.log('Updated favoritesArray (REMOVAL)');
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: id });
      console.log('Updated favoritesArray (ADDITION)');
    }
  };

  useEffect(() => {
    console.log('favoritesArray', state.favoritesArray);
  }, [state.favoritesArray]);

  return {
    navAtLeastOneFavCheck: state.navAtLeastOneFavCheck,
    favoritesArray: state.favoritesArray,
    photoSelected: state.photoSelected,
    handlePhotoClick,
    handleCloseButton,
    addOrRemoveFav,
  };
};

export default useApplicationData;
