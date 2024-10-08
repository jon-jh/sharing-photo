import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

//Move the sample data here (this is the parent component which we will use to pass data down to the child components)

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

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem data = {sampleDataForPhotoListItem}/>
      We rendering now
    </div>
  );
};

export default App;
