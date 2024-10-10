import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';

const photoArray = [];

// const arrayHelper = (limit) => {
//   for (let i = 0; i < limit; i++) {
//     photoArray.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem} />);
//   }
// };
// arrayHelper(3);

const App = () => {
  return (
    <div className="App">
      Page TOP
      {/* {photoArray} */}
      <PhotoList />
      Page BOTTOM
    </div>
  );
};

export default App;
