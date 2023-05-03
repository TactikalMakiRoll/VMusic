<template>
  <div class="mx-auto flex h-screen max-w-[2560px] flex-col sm:flex-row xl:overflow-hidden">
    <NavBar
      class="shrink-0"
      :class="{
        'brightness-50': playlistExpanded,
        'xl:brightness-100': playlistExpanded
      }"
    ></NavBar>
    <RouterView
      @openPlaylist="switchPlaylist"
      @sendWarning="showWarning"
      :class="{
        'brightness-50': playlistExpanded,
        'xl:brightness-100': playlistExpanded
      }"
    />
    <ActivePlaylist
      @closePlaylist="switchPlaylist"
      v-if="playlistExpanded"
      class="absolute right-0 h-screen shrink-0 xl:static"
    ></ActivePlaylist>
  </div>
  <Transition name="warning">
    <WarningPopup
      @popup-expired="warningVisible = false"
      v-if="warningVisible"
      >{{ warningText }}</WarningPopup
    >
  </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';

import NavBar from './components/NavBar.vue';
import ActivePlaylist from './components/ActivePlaylist.vue';

import { useProfileStore } from './stores/profile';
import { getProfileInfo } from './scripts/spotifyLogin.js';
import WarningPopup from './components/UI/WarningPopup.vue';

const profile = useProfileStore();
const playlistExpanded = ref(false);
const warningVisible = ref(false);
const warningText = ref('');

function switchPlaylist() {
  playlistExpanded.value = !playlistExpanded.value;
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  profile.userCode = params.get('code');

  if (profile.userCode) {
    getProfileInfo(profile.clientId, profile.userCode);
  }
});

function showWarning(text) {
  warningText.value = text;
  warningVisible.value = true;
}
</script>

<style>
.warning-enter-active,
.warning-leave-active {
  transition: opacity 0.5s ease;
  transform: translateY(200%);
}

.warning-enter-to,
.warning-leave-from {
  opacity: 1;
  transform: translateY(44px);
}

.warning-enter-from,
.warning-leave-to {
  transform: translateY(200%);
  opacity: 0;
}
</style>
