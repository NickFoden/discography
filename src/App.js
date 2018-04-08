import React, { Component } from "react";
import ArtistSearch from "./Components/ArtistSearch";
import AlbumResults from "./Components/AlbumResults";
import Header from "./Components/Header";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArtistSearch />
        <AlbumResults />
      </div>
    );
  }
}

export default App;
