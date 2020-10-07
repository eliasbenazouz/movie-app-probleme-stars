import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Filter from './Components/Filter'
import MovieList from './Components/MovieList';

function App() {  

  let [movies, setMovies] = useState([{
    "title": "Interstellar",
    "description": 120,
    "posterUrl": "https://bit.ly/3jzo1eL",
    "rate": 4,
    "key": uuidv4()
},{
    "title": "Ad Astra",
    "description": 120,
    "posterUrl": "https://bit.ly/3iBK4jD",
    "rate": 3,
    "key": uuidv4()
},{
    "title": "Solaris",
    "description": 120,
    "posterUrl": "https://bit.ly/2F7E5FS",
    "rate": 5,
    "key": uuidv4()      
},{
    "title": "Star Wars",
    "description": 120,
    "posterUrl": "https://bit.ly/3nkJ07q",
    "rate": 2,
    "key": uuidv4()
}])

  const filtering = (e) => {
    setMovies(e)
  }

  return ( 
    <React.Fragment>
      <div className="App">
        <Filter filtering={filtering} movies={movies} />
        <MovieList movies={movies}/>
      </div>
    </React.Fragment>
  );
}

export default App;




