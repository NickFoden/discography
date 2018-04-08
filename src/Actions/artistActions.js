export const searchArtistAction = ARTIST_NAME => {
  fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}`).then(
    response => {
      console.log(response);
    }
  );
};
