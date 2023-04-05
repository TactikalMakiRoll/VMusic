<template>
  <div class="mx-auto flex h-screen max-w-[2560px] flex-col xl:overflow-hidden sm:flex-row">
    <NavBar
      class="shrink-0"
      :class="{
        'brightness-50': playlistExpanded,
        'sm:brightness-100': playlistExpanded
      }"
    ></NavBar>
    <RouterView
      @openPlaylist="switchPlaylist"
      :class="{
        'brightness-50': playlistExpanded
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
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/UI/NavBar.vue';
import ActivePlaylist from './components/UI/ActivePlaylist.vue';
const playlistExpanded = ref(false);

function switchPlaylist(){
  playlistExpanded.value = !playlistExpanded.value;
}


</script>
