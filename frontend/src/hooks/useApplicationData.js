import axios from "axios";
import { useReducer, useEffect } from "react";
import {
  SET_SELECTED_PHOTO,
  CLOSE_PHOTO,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  GET_PHOTOS_BY_TOPICS,
} from "./actionTypes";

const initialState = {
  photoSelected: null,
  navAtLeastOneFavCheck: false,
  favoritesArray: [],
  photos: [],
  topics: [],
};

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case SET_SELECTED_PHOTO:
      return { ...state, photoSelected: action.payload };
    case CLOSE_PHOTO:
      return { ...state, photoSelected: null };
    case ADD_FAVORITE:
      const photoToAdd = state.photos.find(
        (photo) => photo.id === action.payload
      );
      if (photoToAdd) {
        const updatedFavsAdd = [...state.favoritesArray, photoToAdd];
        return {
          ...state,
          favoritesArray: updatedFavsAdd,
          navAtLeastOneFavCheck: updatedFavsAdd.length > 0,
        };
      }
      return state;
    case REMOVE_FAVORITE:
      const updatedFavsRemove = state.favoritesArray.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        favoritesArray: updatedFavsRemove,
        navAtLeastOneFavCheck: updatedFavsRemove.length > 0,
      };
    case GET_PHOTOS_BY_TOPICS:
      return { ...state, photos: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePhotoClick = (photo) => {
    dispatch({ type: "SET_SELECTED_PHOTO", payload: photo });
  };
  const handleCloseButton = () => {
    dispatch({ type: "CLOSE_PHOTO" });
  };

  // API Load
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/photos")
      .then((response) => {
        dispatch({ type: SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/topics")
      .then((response) => {
        dispatch({ type: SET_TOPIC_DATA, payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching topics data:", error);
      });
  }, []);

  const loadTopicPhotos = (topic_id) => {
    axios
      .get(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((response) => {
        dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topics:", error);
      });
  };

  const addOrRemoveFav = (photo, isFavorite) => {
    const id = photo.id;
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: id });
    }
  };

  return {
    navAtLeastOneFavCheck: state.navAtLeastOneFavCheck,
    favoritesArray: state.favoritesArray,
    photoSelected: state.photoSelected,
    handlePhotoClick,
    handleCloseButton,
    addOrRemoveFav,
    photos: state.photos,
    topics: state.topics,
    loadTopicPhotos,
  };
};

export default useApplicationData;
