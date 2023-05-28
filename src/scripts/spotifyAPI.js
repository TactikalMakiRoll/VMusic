// Using spotify API. For any action, the token is needed which is received by request from tokenEndpoint
const baseEndpoint = 'https://api.spotify.com';
const tokenEndpoint = 'https://accounts.spotify.com/api';

// My account credentials (will be revoked)
const clientID = '10fa63e5bae4490cbf422f6d3e5cebf6';
const clientSecret = '306ecda12875465797b3cc3ca565db33';

// TODO: use try catch in any request in Vue components and show a warning
// TODO: in all authorization dependent requests, perform some kind of warning/login redirection when token expires

// get simple access token for generic non-authorized requests
async function getToken() {
    // attaching needed Headers and Body values, more at https://developer.spotify.com/documentation/web-api/concepts/api-calls
    const requestHeader = new Headers({
        'content-type': 'application/x-www-form-urlencoded'
    });
    const requestBody = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientID,
        client_secret: clientSecret
    });

    // fetching a response
    const response = await fetch(tokenEndpoint + '/token', {
        method: 'POST',
        headers: requestHeader,
        body: requestBody
    });

    // in case of failure throw an error TODO: use try catch in any request and show a warning
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const trending = await response.json();

    return trending?.access_token;
}

// get all the possible music genres
async function getGenres() {
    // get and attach token for request
    let accessToken = await getToken();
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // perform the request
    const response = await fetch(baseEndpoint + '/v1/recommendations/available-genre-seeds', {
        headers: requestHeader
    });

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const genres = await response.json();
    return genres.genres;
}

// get 20 most featured songs for home page
async function getFeaturedPlaylistTracks() {
    // get and attach token for request
    let accessToken = await getToken();
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // perform the request
    const response = await fetch(baseEndpoint + '/v1/browse/featured-playlists?offset=0&limit=1', {
        headers: requestHeader
    });

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    // extract first playlist info to get trending songs from it
    let featuredPlaylist = await response.json();
    featuredPlaylist = featuredPlaylist.playlists.items[0].tracks;

    // fetch songs from the playlist
    const songResponse = await fetch(`${featuredPlaylist.href}?limit=20`, {
        headers: requestHeader
    });

    // in case of failure throw an error
    if (!songResponse.ok) {
        const message = `An error has occured: ${songResponse.status}`;
        throw new Error(message);
    }

    const featuredSongs = await songResponse.json();

    return featuredSongs.items;
}

// get most recently released albums for home page
async function getNewReleases() {
    // get and attach token for request
    let accessToken = await getToken();
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // fetch 4 new albums
    const response = await fetch(baseEndpoint + '/v1/browse/new-releases?limit=4', {
        headers: requestHeader
    });

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const featured = await response.json();
    return featured.albums.items;
}

// check if user is following an artist - Needs authorization token
async function checkArtistFollow(artistList) {
    //check if there is a valid authorization token
    let accessToken;
    if (localStorage.getItem('currentToken')) {
        accessToken = localStorage.getItem('currentToken');
    } else {
        // TODO: request a new token or log out and ask user to log in again
        accessToken = await getToken();
    }

    // attach token to headers
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // fetch info about user following the artists or not
    const response = await fetch(
        baseEndpoint + '/v1/me/following/contains?type=artist&ids=' + artistList.join(','),
        {
            headers: requestHeader
        }
    );

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status} ${response.text}`;
        throw new Error(message);
    }

    const artistFollow = await response.json();
    return artistFollow;
}

// add artist to user follows - Needs authorization token
async function addArtistToFollows(artist) {
    //check if there is a valid authorization token
    let accessToken;
    if (localStorage.getItem('currentToken')) {
        accessToken = localStorage.getItem('currentToken');
    } else {
        accessToken = await getToken();
    }

    // attach token to headers
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // use fetch to send a put request to add artist to follows
    const response = await fetch(baseEndpoint + '/v1/me/following?type=artist&ids=' + artist, {
        method: 'PUT',
        headers: requestHeader,
        body: JSON.stringify({ ids: artist })
    });

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status} ${response.text}`;
        throw new Error(message);
    }
    return 200;
}

// remove artist from follows - Needs authorization token
async function removeArtistFromFollows(artist) {
    //check if there is a valid authorization token
    let accessToken;
    if (localStorage.getItem('currentToken')) {
        accessToken = localStorage.getItem('currentToken');
    } else {
        accessToken = await getToken();
    }

    // attach token to headers
    const requestHeader = new Headers({
        Authorization: ' Bearer  ' + accessToken
    });

    // use fetch to send a delete request to remove artist to follows
    const response = await fetch(baseEndpoint + '/v1/me/following?type=artist&ids=' + artist, {
        method: 'DELETE',
        headers: requestHeader,
        body: JSON.stringify({ ids: artist })
    });

    // in case of failure throw an error
    if (!response.ok) {
        const message = `An error has occured: ${response.status} ${response.text}`;
        throw new Error(message);
    }
    return 200;
}

export {
    getToken,
    getGenres,
    getFeaturedPlaylistTracks,
    getNewReleases,
    checkArtistFollow,
    addArtistToFollows,
    removeArtistFromFollows
};
