export const searchArtistAction = ARTIST_NAME => {
  fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&entity=album`)
    .then(data => {
      return data.json();
    })
    .then(json => {
      console.log(json);
    });
};
