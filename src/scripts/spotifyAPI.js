// using spotify api
const baseEndpoint = "https://api.spotify.com";
const tokenEndpoint = "https://accounts.spotify.com/api";
const clientID = "10fa63e5bae4490cbf422f6d3e5cebf6";
const clientSecret = "306ecda12875465797b3cc3ca565db33";

// /v1/request_token access token valid for 1h
// /v1/music/trending trending

async function getToken(){
    const requestHeader = new Headers({
        "content-type": "application/x-www-form-urlencoded"
    });
    // const requestBody = `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`;
    const requestBody = new URLSearchParams({
        grant_type:'client_credentials',
        client_id: clientID,
        client_secret: clientSecret
    });
    // const requestBody = new FormData();
    // requestBody.append('grant_type', 'client_credentials');
    // requestBody.append('client_id',clientID);
    // requestBody.append('client_secret', clientSecret);
    const response = await fetch(tokenEndpoint + '/token', {
        method: "POST",
        headers: requestHeader,
        body: requestBody
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const trending = await response.json();
    return trending?.access_token;
}

async function getGenres() {
    let accessToken = await getToken();
    const requestHeader = new Headers({
        "Authorization": " Bearer  " + accessToken
    });
    const response = await fetch(baseEndpoint + '/v1/recommendations/available-genre-seeds', {
        headers: requestHeader
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const genres = await response.json();
    return genres.genres;
}

async function getFeaturedPlaylistTracks() {
    let accessToken = await getToken();
    const requestHeader = new Headers({
        "Authorization": " Bearer  " + accessToken
    });
    const response = await fetch(baseEndpoint + '/v1/browse/featured-playlists?country=UA&timestamp=2023-04-05T17%3A41%3A19&offset=0&limit=1', {
        headers: requestHeader
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    let featuredAlbum = await response.json();
    featuredAlbum = featuredAlbum.playlists.items[0].tracks;
    console.log(featuredAlbum.href);

    const songResponse = await fetch(`${featuredAlbum.href}?limit=10`, {
        headers: requestHeader
    });
    if (!songResponse.ok) {
        const message = `An error has occured: ${songResponse.status}`;
        throw new Error(message);
    }

    const featuredSongs = await songResponse.json();
    console.log(featuredSongs);

    return featuredSongs.items;


}

async function getNewReleases() {
    let accessToken = await getToken();
    const requestHeader = new Headers({
        "Authorization": " Bearer  " + accessToken
    });
    const response = await fetch(baseEndpoint + '/v1/browse/new-releases?limit=4', {
        headers: requestHeader
    });
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const featured = await response.json();
    return featured.albums.items;
}

export {getToken, getGenres, getFeaturedPlaylistTracks, getNewReleases};