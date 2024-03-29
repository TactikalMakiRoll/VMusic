// made and adapted to my needs with this spotify docs tutorial - https://developer.spotify.com/documentation/web-api/howtos/web-app-profile

async function performLogin(clientId) {
    redirectToAuthCodeFlow(clientId);
}
async function getProfileInfo(clientId, code) {
    let accessToken = await checkToken(clientId, code);

    const profile = await fetchProfile(accessToken);

    console.log('profile info');
    console.log(profile);

    if (profile.error) {
        console.log('returned undefined profile');
        return undefined;
    }

    return profile;
}

async function checkToken(clientId, code) {
    // check if there is already an existing valid access token for an account and set one if it's not there, also sending a request to check whether the token is still valid.

    let accessToken;

    if (!localStorage.getItem('currentToken')) {
        accessToken = await getAccessToken(clientId, code);
        localStorage.setItem('currentToken', accessToken);
    } else {
        accessToken = localStorage.getItem('currentToken');
    }

    return accessToken;
}

async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', 'http://localhost:5173/');
    params.append('scope', 'user-read-private user-read-email user-follow-read user-follow-modify');
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// Getting access token specifically for login
async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem('verifier');

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:5173/');
    params.append('code_verifier', verifier);

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

//get information about user profile
async function fetchProfile(token) {
    const result = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

export { performLogin, getProfileInfo };
