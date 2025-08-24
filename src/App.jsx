import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Star from "./assets/images/Star.png"
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return(
    <div className='app'>
      <Navbar />

      <main>
        <MovieList type="popular" title="Popular"/>
        <MovieList type="top_rated" title="Top Rated"/>
        <MovieList type="upcoming" title="Upcoming"/>


      </main>
    </div>
  );
};

export default App;
