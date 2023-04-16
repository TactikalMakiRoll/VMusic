// made and adapted to my needs with this spotify docs tutorial - https://developer.spotify.com/documentation/web-api/howtos/web-app-profile

import { useProfileStore } from '@/stores/profile';

const profile = useProfileStore();
const clientId = profile.clientId; 
const code = profile.userCode;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId) {
    // TODO: Redirect to Spotify authorization page
}

async function getAccessToken(clientId, code) {
  // TODO: Get access token for code
}

async function fetchProfile(token) {
    // TODO: Call Web API
}

function populateUI(profile) {
    // TODO: Update UI with profile data
}