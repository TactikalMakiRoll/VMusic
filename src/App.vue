<template>
  <div class="mx-auto flex h-screen max-w-[2560px] flex-col xl:overflow-hidden sm:flex-row">
    <NavBar
      class="shrink-0"
      :class="{
        'brightness-50': playlistExpanded,
        'xl:brightness-100': playlistExpanded
      }"
    ></NavBar>
    <RouterView
      @openPlaylist="switchPlaylist"
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
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';

import NavBar from './components/NavBar.vue';
import ActivePlaylist from './components/ActivePlaylist.vue';

import { useProfileStore } from './stores/profile';

const profile = useProfileStore();
const playlistExpanded = ref(false);

function switchPlaylist(){
  playlistExpanded.value = !playlistExpanded.value;
}

onMounted(()=>{
  const params = new URLSearchParams(window.location.search);

  profile.userCode = params.get("code");

});


</script>
