import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// this Pinia store is used to store profile information (name and profile picture) and to show recent songs listened by this profile
export const useProfileStore = defineStore('profile', () => {
  // a code that will be sent to Spotify for an access token
  const userCode = ref(null);
  const clientId = ref("10fa63e5bae4490cbf422f6d3e5cebf6");
  const profileName = ref("Guest");
  const profileImage = ref(null);

  // reset function for when user logs out
  function $reset() {
    profileName.value = "Guest";
    profileImage.value = null;
    userCode.value = null;
  }
  return {profileName, profileImage, clientId, userCode, $reset};
});
