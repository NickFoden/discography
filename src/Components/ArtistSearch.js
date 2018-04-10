import React, { Component } from "react";
import { searchArtistAction } from "../Actions/artistActions";
import "./artistSearch.css";

class ArtistSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: "",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.artist === "") {
      searchArtistAction("Iron Maiden");
      this.setState({
        artist: "",
        message: "UP THE IRONS !"
      });
    } else {
      searchArtistAction(this.state.artist);
      this.setState({
        artist: "",
        message: ""
      });
    }
  }
  render() {
    return (
      <div>
        <div className="artist-search-div">
          <form onSubmit={this.handleSubmit}>
            <input
              className="artist-input"
              size="40"
              type="text"
              name="artist"
              value={this.state.artist}
              onChange={this.handleChange}
              placeholder="    enter a band or artist"
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
          <br />
        </div>
        <h1 className="message">{this.state.message}</h1>
      </div>
    );
  }
}

export default ArtistSearch;
