import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "./albumResults.css";

class AlbumResults extends Component {
  render() {
    return (
      <div className="album-results-div">
        {this.props.Albums ? (
          <ul className="album-list">
            {this.props.Albums.map((album, index) => (
              <li key={index}>
                <a
                  href={album.collectionViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="album-image"
                    src={album.artworkUrl100}
                    width="200px"
                    alt={`${album.collectionName} album cover art`}
                  />
                </a>
                <br />
                <h4 className="artist-link">
                  <a
                    href={album.artistViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {album.artistName}'s{" "}
                  </a>
                </h4>
                <h2 className="album-link">
                  {" "}
                  <a
                    href={album.collectionViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {album.collectionName}
                  </a>
                </h2>
                <p className="album-info-paragraph">
                  ({album.trackCount} track album released{" "}
                  {moment(album.releaseDate).format("MMM YYYY")})
                </p>
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
