import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

// OMDBにAPI許可を貰う？
const MOVIE_API_URL = ""

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([{}]);
  //   { Title: "Title-a", Year: "20XX" }
  // ]);
  const [erMsg, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL).then(response => response.json).then(jsonResponse => {
      // setMovies(jsonResponse.Search);
      setLoading(false)
    });
  }, []);
    
  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
    setMovies({ Title: "Title-a", Year: "20XX" });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          // setMovies(jsonResponse.Search)
          setLoading(false)
        } else {
          setErrorMessage(jsonResponse.Error)
          setLoading(false)
        }
      });
  };
  
  return (
    <div classNmae="App">
      <Header Text="HOOKED_React" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>

      <div classNmae="movies">
        {
          loading && !erMsg ? (<span>loading...</span>) :
            erMsg ? (<div className="errorMessage">{erMsg}</div>) : (movies.map((movie, index) => (<Movie key={`${index}-${movie.Title}`} movie={movie} />)))
        }
      </div>

    </div>
  );
};

export default App;
