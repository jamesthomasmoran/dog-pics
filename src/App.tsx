import React, { useState, ReactElement } from 'react';
import './App.css';
import DogPicSearchPageForm from './DogPicSearchPageForm/DogPicSearchPageForm';
import DogPicSearchPageImageGrid from './DogPicSearchPageImageGrid/DogPicSearchPageImageGrid';



const App = (): ReactElement => {

  const [dogPics, setDogPics] = useState([]);

  return (
    <div className="main">
      <div className="header">
      <h1>Dog Pics</h1>
      </div>
      <div className="content">
          <DogPicSearchPageForm setDogPics={setDogPics}/>
          <DogPicSearchPageImageGrid dogPicUrls={dogPics}/>
      </div>
    </div>
  );
}

export default App;
