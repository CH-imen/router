import { useState, useEffect } from "react";
import MovieList from './MovieList';


function Filter () {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState('');

useEffect(() =>{

   fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((apiMovies) =>{
    setMovies(apiMovies);
    setShowMovies(true);
  });
}, []
);

          
 const searchMoviesHandler = (event)=>{
  
  const search = event.target.value.toLocaleLowerCase();
  setSearchInput(search);
 };


    const filteredMovies = movies.filter((data)=>{
      return data.title.toLocaleLowerCase().includes(searchInput);
    });

    let renderMovies ="Loading movies..";
    if(showMovies){
      renderMovies= <MovieList movies={filteredMovies}/>
    }
  return (
    
    <div className="App">
      <input type="search"
      placeholder="search movies"
      onChange={searchMoviesHandler}/>
      
     {renderMovies}
    </div>
  );

  };
export default Filter;