import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from 'mocks/topics';
import { useState } from 'react';

const photoArray = [];
// const arrayHelper = (limit) => {
//   for (let i = 0; i < limit; i++) {
//     photoArray.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem} />);
//   }
// };
// arrayHelper(3);

const App = () => {
  const [isFavPhoto, isFavPhotoExist] = useState(false);
  return (
    <div className="App">
      Page TOP
      {/* {photoArray} */}
      {/* <TopNavigation />
      <TopicList />
      <PhotoList /> */}
      <HomeRoute topics={topics} photos={photos} isFavPhotoExist={isFavPhotoExist} isFavPhoto={isFavPhoto} />
      Page BOTTOM
    </div>
  );
};

export default App;
