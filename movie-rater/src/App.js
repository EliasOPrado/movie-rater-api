import Reat, { useState, useEffect } from 'react'
import "./App.css";
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/movie/", {
      method: 'GET',
      headers: {
        'Content-type':'application/json',
        'Authorization': 'Token da8cf0de17fd702713e195636fff6e55f2687ab9'
      }
    })
    .then(response => response.json())
    .then( response => setMovies(response))
    .catch(error => console.log(error))
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
      <MovieList movies={movies} movieClicked={movieClicked}/>
        
        <MovieDetail movie={selectedMovie}/>
      </div>
    </div>
  );
}

export default App;
