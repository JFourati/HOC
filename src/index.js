import React from "react";
import ReactDOM from "react-dom";
import "./MovieApp.css";
import MovieApp from "./MovieApp";

class App extends React.Component {
  render() {
    return (
      <div>
        <MovieApp />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
