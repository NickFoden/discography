import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "./albumResults.css";

class AlbumResults extends Component {
  render() {
    return (
      <div className="App">
        {this.props.Albums ? (
          <ul className="album-list">
            {this.props.Albums.map((album, index) => (
              <li key={index}>
                <img
                  src={album.artworkUrl100}
                  width="200px"
                  alt={`${album.collectionName} album cover art`}
                />
                <br />
                <h2>{album.collectionName}</h2>
                Released {moment(album.releaseDate).format("MMM YYYY")}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Albums: state.albums.albumArray
  };
}

export default connect(mapStateToProps)(AlbumResults);
