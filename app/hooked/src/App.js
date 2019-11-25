import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState } from 'react';

function App() {
  const [movie_name, search_movie] = useState();
  return (
    <div className="App">
      <h6>検索フォームの値「{movie_name}」</h6>
      <h1 className="hooked_title">HOOKED</h1>
      {/* <form onSubmit={this.search_movie}> */}
      <form onSubmit={() => search_movie(movie_name)}>
        <label>
          映画タイトル名：
          <input className="search_field" type="text" value={movie_name}/>
        </label>
        <input className="search_btn" type="submit" value="SEARCH" />
      </form>
    </div>
  );
}

export default App;
