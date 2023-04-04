// using spotify api
const baseEndpoint = "https://api.spotify.com";
const tokenEndpoint = "https://accounts.spotify.com/api";
const clientID = "10fa63e5bae4490cbf422f6d3e5cebf6";
const clientSecret = "52a5e3c496d845d295f737a2a79ab6dc";

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
    console.log(response);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const trending = await response.json();
    console.log(trending);
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
    const trending = await response.json();
    return trending.genres;
}

export {getToken, getGenres};