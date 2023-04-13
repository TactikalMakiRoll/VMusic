<template>
  <aside
    class="backdrop-opacity-100 flex w-screen shrink-0 flex-col bg-[rgba(19,19,19,1)] py-6 px-6 sm:w-auto md:py-11 md:pl-8 md:pr-11"
  >
    <button @click="$emit('closePlaylist')" class="w-10 cursor-pointer self-end hover:brightness-200">
      <img class="object-contain" src="icons/close.svg" alt="close active playlist" />
    </button>
    <div class="shrink-1 mt-4 md:mt-16">
      <h3 class="text-xl font-bold capitalize">Next on Chillout Playlist</h3>
      <div class="my-5 md:mt-8" v-for="n in 2">
        <div class="flex cursor-pointer items-center">
          <img class="h-16 w-16 rounded-sm" src="images/trackCover.jpg" alt="song image" />
          <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
            <h4 class="text-lg font-bold text-[rgb(214,214,214)]">Naturally</h4>
            <p>Tinashe</p>
          </div>
          <TrackOptions class="ml-auto"></TrackOptions>
        </div>
      </div>
    </div>
    <div
      class="mx-auto mt-auto flex aspect-square w-3/4 bg-[url(images/trackCover.jpg)] bg-contain bg-no-repeat px-3 pb-2 sm:w-full sm:max-w-none"
    >
      <div class="mt-auto w-full rounded-xl bg-black/60 px-8 py-8 text-center backdrop-blur-xl">
        <h3 class="text-lg font-bold text-[rgb(214,214,214)]">Za kare</h3>
        <p class="font-bold text-[rgba(154,154,154,1)]">SB Maffija</p>
        <div class="my-2 flex justify-evenly gap-8">
          <button class="w-10 cursor-pointer">
            <img src="icons/backward.svg" class="object-contain" alt="play current chosen track" />
          </button>
          <button class="w-10 cursor-pointer">
            <img src="icons/play.svg" alt="play current chosen track" />
          </button>
          <button class="w-10 cursor-pointer">
            <img src="icons/forward.svg" class="object-contain" alt="play current chosen track" />
          </button>
        </div>
        <div class="relative">
          <div
            class="absolute top-0 left-0 h-1 w-full rounded-xl bg-gray-50/30"
            id="progress"
          ></div>
          <div class="absolute top-0 left-0 h-1 w-6/12 rounded-xl bg-white" id="progress"></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import TrackOptions from './UI/TrackOptions.vue';

const emits = defineEmits(['closePlaylist']);

</script>

