import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

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

const photoArray = [];
const arrayHelper = (limit) => {
  for (let i = 0; i < limit; i++) {
    photoArray.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem} />);
  }
};
arrayHelper(3);

const App = () => {
  return (
    <div className="App">
      Page TOP
      {photoArray}
      Page BOTTOM
    </div>
  );
};

export default App;
