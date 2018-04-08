import store from "../Store";

const ADD_ALBUMS = "ADD_ALBUMS";
export function addAlbums(data) {
  return {
    type: ADD_ALBUMS,
    data
  };
}

export const searchArtistAction = ARTIST_NAME => {
  fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&entity=album`)
    .then(data => {
      return data.json();
    })
    .then(data => {
      store.dispatch(addAlbums(data.results));
    });
};
