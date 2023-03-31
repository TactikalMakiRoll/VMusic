<template>
  <div class="flex h-screen max-w-[2440px] flex-col overflow-hidden sm:flex-row">
    <NavBar
      class="shrink-0"
      :class="{
        'brightness-50': playlistExpanded,
        'sm:brightness-100': playlistExpanded
      }"
    ></NavBar>
    <RouterView
      :isPlaylistOpen="playlistExpanded"
      :class="{
        'brightness-50': playlistExpanded
      }"
    />
    <ActivePlaylist
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

const playlistExpanded = ref(true);
</script>
