import React, { useState } from 'react';
import './App.css';

function Form_send_demo() {
  console.log("App init")
  const [movie_name, set_MovieName] = useState("");
  const [hidden, setHidden] = useState(false);

  const handleChange = e => {
    set_MovieName(e.target.value )
  };

  const printValues = e => {
    e.preventDefault();
    console.log("movie_name => " + movie_name);
  };

  return (
    <div className="App">
      {hidden ? <h6>検索フォームの値「{movie_name}」</h6> : ""}
      <h1 className="hooked_title">HOOKED</h1>
      <form onSubmit={printValues} >
        <label>
          映画タイトル名：
          <input className="search_field" type="text" value={movie_name} onChange={handleChange} />
        </label>
        <input className="search_btn" type="submit" value="SEARCH" />
      </form>
      <button onClick={() => setHidden(true)}>表示</button>
      <button onClick={() => setHidden(false)}>非表示</button>
    </div>
  );
}

export default Form_send_demo;
