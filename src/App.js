import React, { Component } from "react";
import ArtistSearch from "./Components/ArtistSearch";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistSearch />
      </div>
    );
  }
}

export default App;
