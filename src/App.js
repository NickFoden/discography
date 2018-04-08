import React, { Component } from "react";
import ArtistSearch from "./Components/ArtistSearch";
import AlbumResults from "./Components/AlbumResults";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtistSearch />
        <AlbumResults />
      </div>
    );
  }
}

export default App;
