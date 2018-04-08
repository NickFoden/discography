import React, { Component } from "react";
import { searchArtistAction } from "../Actions/artistActions";
import "./artistSearch.css";

class ArtistSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    searchArtistAction(this.state.artist);
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Artist Search </label>
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default ArtistSearch;
