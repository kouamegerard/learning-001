import './App.css';
import { useEffect, useState } from 'react';
import search from './images/search.png';
import MovieCards from './MovieCards';

const API_KEY = "8af7c34d";
const API_URL = "http://www.omdbapi.com?apikey="+API_KEY;

function App() {

  const [amdbMovies, setAmdbMovies] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const searchFilm = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
    setAmdbMovies(data.Search)
  }

  useEffect ( () =>  {
    searchFilm(searchInput);
  }, [searchInput])

  return (
    <div className="app">

      {/* Site Title */}
      <h1>CineFlix</h1>

      {/* Search Bar */}
      <div className="search">
        <input type="text" placeholder="Search for a film" value={searchInput} onChange={(search) => { setSearchInput(search.target.value) }} />
        <img src={search} alt='Search Button Icon' />
      </div>

      {/* Film List */}
      {
        amdbMovies?.length > 0 
          ? (
          <div className="container">
            { amdbMovies.map( (movie, index) => (<MovieCards key={index} movie={movie} />) ) }
          </div>
        ) : (
          <div className='empty'>
            <h2>No Results Found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
