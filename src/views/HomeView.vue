<template>
  <div class="flex">
    <NavBar></NavBar>
    <main class="grow py-10 px-8">
      <div class="flex gap-9">
        <input
          class="grow rounded-full bg-[rgb(28,27,28)] px-9 py-4 text-[rgb(187,187,187)] placeholder:text-[rgb(119,119,119)]"
          type="text"
          placeholder="Search for song, artist, lyrics..."
        />
        <div class="group flex cursor-pointer items-center">
          <img class="h-11 w-11 rounded-full" src="/images/profile.png" alt="profile icon" />
          <span class="mr-4 ml-3">Alex</span>
          <img
            class="w-4 group-hover:brightness-200"
            src="icons/expand.svg"
            alt="Open profile menu"
          />
        </div>
      </div>
      <section class="mt-16">
        <h2 class="text-lg font-bold">Recently Listened Albums</h2>
        <div class="mt-8 flex gap-5">
          <div class="aspect-[1.4] grow overflow-hidden rounded-lg bg-blue-500">
            <div class="mt-auto bg-black/30 py-6 pl-6 backdrop-blur-sm">
              <h3 class="font-bold">Hip-Hop</h3>
              <p class="text-[rgb(190,186,197)]">120 new songs</p>
            </div>
          </div>
          <div class="aspect-[1.4] grow overflow-hidden rounded-lg bg-blue-500">
            <div class="mt-auto bg-black/30 py-6 pl-6 backdrop-blur-sm">
              <h3 class="font-bold">Indie</h3>
              <p class="text-[rgb(190,186,197)]">34 new songs</p>
            </div>
          </div>
          <div class="aspect-[1.4] grow overflow-hidden rounded-lg bg-blue-500">
            <div class="mt-auto bg-black/30 py-6 pl-6 backdrop-blur-sm">
              <h3 class="font-bold">Pop</h3>
              <p class="text-[rgb(190,186,197)]">100 new songs</p>
            </div>
          </div>
          <div class="aspect-[1.4] grow overflow-hidden rounded-lg bg-blue-500">
            <div class="mt-auto bg-black/30 py-6 pl-6 backdrop-blur-sm">
              <h3 class="font-bold">Rap</h3>
              <p class="text-[rgb(190,186,197)]">49 new songs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import NavBar from '../components/UI/NavBar.vue';

const createAlbumBG = computed(() => {
  let gradientDirections = [
    'bg-gradient-to-t',
    'bg-gradient-to-tr',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-gradient-to-b',
    'bg-gradient-to-bl',
    'bg-gradient-to-l',
    'bg-gradient-to-tl'
  ];
  let hexValues = '0123456789abcdef';
  let fromColor = '#';
  let viaColor = '#';
  let toColor = '#';

  for (let i = 0; i < 6; i++) {
    fromColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    viaColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    toColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
  }
});
</script>
