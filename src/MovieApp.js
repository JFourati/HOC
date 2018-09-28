import React from "react";
import HOC from "./HOC";

const MovieApp = () => (
  <div className="movie-app">
    <header className="movie-app-header">
      <div className="name-filter">
        <input className="name-filter-text" type="text" />
        <input className="name-filter-button" type="button" value="Search" />
      </div>
      <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <span>★★★★☆</span>
      </div>
    </header>
    <main className="movie-app-main">
      <div className="movie-list">
        <div className="movie-card">
          <div className="movie-rating">★★★★★</div>
          <div
            className="movie-image"
            style={{
              backgroundImage:
                "url('https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/TIIA-harrypooter.jpg')"
            }}
          />
          <div className="movie-description">
            Harry Potter and the Prisoner of Azkaba - 2004
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-rating">★★★★★</div>
          <div className="movie-image" />
          <div className="movie-description">Maleficent - 2014</div>
        </div>
        <div className="movie-card">
          <div className="movie-rating">★★★★☆</div>
          <div className="movie-image" />
          <div className="movie-description">Mission Impossible - 2018</div>
        </div>
        <div className="new-movie-card">+</div>
      </div>
    </main>
  </div>
);

export default HOC(MovieApp);
