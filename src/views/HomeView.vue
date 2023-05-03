<template>
  <main
    v-if="!loading"
    class="grow overflow-y-auto py-10 px-8 text-center sm:text-left xl:flex xl:h-screen xl:flex-col xl:overflow-hidden"
  >
    <SearchBar @openPlaylist="$emit('openPlaylist')"></SearchBar>
    <!-- Albums -->
    <section class="mt-8">
      <h2 class="text-xl font-bold capitalize">New Releases</h2>
      <div
        class="mt-8 flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row xl:flex-nowrap"
      >
        <div
          class="group relative flex aspect-[1.4] w-80 max-w-[240px] grow flex-col overflow-hidden rounded-lg brightness-90 hover:cursor-pointer xl:max-w-[360px]"
          :style="createAlbumBackground(album.images[0].url)"
          :key="album.id"
          v-for="album in newReleaseAlbums"
        >
          <div class="grow-1 mt-auto bg-black/40 py-6 px-6 backdrop-blur-3xl md:pl-6">
            <h3 class="font-bold">{{ album.name }}</h3>
            <p class="text-[rgb(214,214,214)]">{{ album.total_tracks }} songs</p>
          </div>
          <HoverEffect class="opacity-0 group-hover:opacity-100">
            <button class="h-12 w-12">
              <img
                class="object-contain"
                src="icons/play.svg"
                alt="play chosen playlist"
              />
            </button>
          </HoverEffect>
        </div>
      </div>
    </section>
    <!-- Trending songs -->
    <section class="mt-16 min-h-0 flex-1">
      <h2 class="text-xl font-bold capitalize">Trending Right Now</h2>
      <div
        class="mx-auto mt-9 snap-y snap-end snap-always overflow-y-auto sm:mx-0 md:[mask-image:linear-gradient(180deg,black_0%,black_75%,transparent_100%)] xl:max-h-[calc(100%-5rem)]"
        @scroll="changeFadeOnScroll($event, true)"
      >
        <div
          v-for="(song, index) in featuredTracks"
          class="mb-9 flex items-center justify-start"
        >
          <div class="flex items-center">
            <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">
              {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
            </h4>
            <div class="group relative h-20 w-20 shrink-0 rounded-lg">
              <img
                class="rounded-lg object-cover"
                :src="song.track.album.images[0].url"
                alt="song image"
              />
              <HoverEffect class="opacity-0 group-hover:opacity-100">
                <button class="h-12 w-12">
                  <img
                    class="object-contain"
                    src="icons/play.svg"
                    alt="play chosen playlist"
                  />
                </button>
              </HoverEffect>
            </div>
          </div>
          <div class="mx-5 text-left capitalize text-[rgba(154,154,154,1)]">
            <h3 class="text-lg font-bold text-[rgb(214,214,214)]">{{ song.track.name }}</h3>
            <p>{{ song.track.artists[0].name }}</p>
          </div>
          <div
            class="ml-auto mr-16 hidden items-center gap-4 capitalize text-[rgba(154,154,154,1)] sm:gap-4 md:flex md:gap-8 lg:gap-16"
          >
            <p class="hidden lg:block">{{ song.track.album.name }}</p>
            <p>{{ convertMStoMinutes(song.track.duration_ms) }}</p>
            <button
              class="mb-0.5 h-6 w-6 hover:brightness-200"
              @click="toggleFavorite"
            >
              <img
                class="object-contain"
                src="icons/like.svg"
                alt="like image"
              />
            </button>
            <TrackOptions></TrackOptions>
          </div>
        </div>
      </div>
    </section>
    <!-- Recent Favourites -->
    <section
      class="flex w-full flex-col"
      v-if="userHasListened"
    >
      <div class="flex">
        <h2 class="text-xl font-bold capitalize">Recent Favourites</h2>
        <button class="ml-auto text-[rgba(0,178,255,1)]">View all</button>
      </div>
      <div
        id="favSongs"
        class="scrollbar-hide mt-9 flex w-full grow-0 gap-9 overflow-x-auto scroll-smooth pb-2 [mask-image:linear-gradient(90deg,black_0%,black_65%,transparent_100%)] xl:flex-nowrap"
        @wheel="
          horizontalScroll($event, 400);
          changeFadeOnScroll($event, false);
        "
      >
        <div v-for="n in 20">
          <div class="relative h-32 w-32">
            <img
              class="absolute top-0 left-0 h-full w-full rounded-sm object-cover"
              src="images/trackCover.jpg"
              alt="song cover"
            />
          </div>
          <h3 class="mt-4 font-bold">Alone With You</h3>
          <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
        </div>
      </div>
    </section>
  </main>
  <div
    v-else
    class="absolute top-1/2 left-1/2 h-12 w-12 animate-spin rounded-full border-4 border-solid border-white/30 border-t-white"
  ></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import HoverEffect from '../components/UI/HoverEffect.vue';
import TrackOptions from '../components/UI/TrackOptions.vue';
import SearchBar from '../components/SearchBar.vue';

import { useProfileStore } from '../stores/profile';

import { getFeaturedPlaylistTracks, getNewReleases } from '../scripts/spotifyAPI.js';
import {
  createAlbumBackground,
  horizontalScroll,
  changeFadeOnScroll,
  convertMStoMinutes
} from '../scripts/domHelperFunctions.js';

const emit = defineEmits(['sendWarning', 'openPlaylist']);

const loading = ref(true);
const userHasListened = ref(false);
const featuredTracks = ref([]);
const newReleaseAlbums = ref([]);

const profile = useProfileStore();

async function loadRecommendations() {
  [featuredTracks.value, newReleaseAlbums.value] = await Promise.all([
    getFeaturedPlaylistTracks(),
    getNewReleases()
  ]);
  loading.value = false;
}

onMounted(() => {
  loadRecommendations();
});

function toggleFavorite() {
  if (!profile.userCode) {
    emit('sendWarning', 'Log in to add songs to favorites');
  }
}
</script>
