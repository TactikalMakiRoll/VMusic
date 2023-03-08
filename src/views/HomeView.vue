<template>
  <div class="flex">
    <NavBar></NavBar>
    <!-- Central part -->
    <main class="flex h-screen grow flex-col py-10 px-8">
      <!-- Search bar and profile -->
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
      <!-- Albums -->
      <section class="mt-16">
        <h2 class="text-xl font-bold capitalize">Recently Listened Albums</h2>
        <div class="mt-8 flex gap-5">
          <div
            class="flex aspect-[1.4] grow flex-col overflow-hidden rounded-lg brightness-90"
            :style="createGradientStops()"
          >
            <div class="grow-1 mt-auto bg-black/40 py-6 pl-6 backdrop-blur-3xl">
              <h3 class="font-bold">Hip-Hop</h3>
              <p class="text-[rgb(214,214,214)]">120 new songs</p>
            </div>
          </div>
          <div
            :style="createGradientStops()"
            class="flex aspect-[1.4] grow flex-col overflow-hidden rounded-lg brightness-90"
          >
            <div class="grow-1 mt-auto bg-black/40 py-6 pl-6 backdrop-blur-3xl">
              <h3 class="font-bold">Indie</h3>
              <p class="text-[rgb(214,214,214)]">34 new songs</p>
            </div>
          </div>
          <div
            :style="createGradientStops()"
            class="flex aspect-[1.4] grow flex-col overflow-hidden rounded-lg brightness-90"
          >
            <div class="grow-1 mt-auto bg-black/40 py-6 pl-6 backdrop-blur-3xl">
              <h3 class="font-bold">Pop</h3>
              <p class="text-[rgb(214,214,214)]">100 new songs</p>
            </div>
          </div>
          <div
            :style="createGradientStops()"
            class="flex aspect-[1.4] grow flex-col overflow-hidden rounded-lg brightness-90"
          >
            <div class="grow-1 mt-auto bg-black/40 py-6 pl-6 backdrop-blur-3xl">
              <h3 class="font-bold">Rap</h3>
              <p class="text-[rgb(214,214,214)]">49 new songs</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Trending songs -->
      <section class="mt-16">
        <h2 class="text-xl font-bold capitalize">Trending Right Now</h2>
        <div class="mt-9 h-full grow-0 snap-end overflow-y-scroll">
          <div class="flex items-center">
            <div class="flex items-center">
              <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
              <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
            </div>
            <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
              <h3 class="font-bold text-[rgb(214,214,214)]">Millions</h3>
              <p>Always never</p>
            </div>
            <div class="ml-auto flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]">
              <p>Always never</p>
              <p>8.069 542</p>
              <p>3:58</p>
              <button><img class="mb-0.5 h-6 w-6" src="icons/like.svg" alt="like image" /></button>
            </div>
          </div>
          <div class="mt-9 flex items-center">
            <div class="flex items-center">
              <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
              <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
            </div>
            <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
              <h3 class="font-bold text-[rgb(214,214,214)]">Millions</h3>
              <p>Always never</p>
            </div>
            <div class="ml-auto flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]">
              <p>Always never</p>
              <p>8.069 542</p>
              <p>3:58</p>
              <button><img class="mb-0.5 h-6 w-6" src="icons/like.svg" alt="like image" /></button>
            </div>
          </div>
          <div class="mt-9 flex items-center">
            <div class="flex items-center">
              <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
              <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
            </div>
            <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
              <h3 class="font-bold text-[rgb(214,214,214)]">Millions</h3>
              <p>Always never</p>
            </div>
            <div class="ml-auto flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]">
              <p>Always never</p>
              <p>8.069 542</p>
              <p>3:58</p>
              <button><img class="mb-0.5 h-6 w-6" src="icons/like.svg" alt="like image" /></button>
            </div>
          </div>
          <div class="mt-9 flex items-center">
            <div class="flex items-center">
              <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
              <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
            </div>
            <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
              <h3 class="font-bold text-[rgb(214,214,214)]">Millions</h3>
              <p>Always never</p>
            </div>
            <div class="ml-auto flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]">
              <p>Always never</p>
              <p>8.069 542</p>
              <p>3:58</p>
              <button><img class="mb-0.5 h-6 w-6" src="icons/like.svg" alt="like image" /></button>
            </div>
          </div>
        </div>
      </section>
      <!-- Recent Favourites -->
      <section class="mt-16">
        <h2 class="text-xl font-bold capitalize">Recent Favourites</h2>
      </section>
    </main>
  </div>
</template>

<script setup>
import NavBar from '../components/UI/NavBar.vue';

function createGradientStops() {
  // define possible gradient directions
  let gradientDirections = [
    'to top',
    'to top right',
    'to right',
    'to bottom right',
    'to bottom',
    'to bottom left',
    'to left',
    'to top left'
  ];

  // prepare color variables
  let hexValues = '0123456789abcdef';
  let fromColor = '#';
  let viaColor = '#';
  let toColor = '#';

  // randomly generate color using hexValues string with possible hex symbols
  for (let i = 0; i < 6; i++) {
    fromColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    viaColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    toColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
  }

  // return the object to be used in styling album cover -> using tailwind values
  return {
    '--tw-gradient-from': fromColor,
    '--tw-gradient-via': viaColor,
    '--tw-gradient-to': toColor,
    '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)',
    'background-image':
      'linear-gradient(' +
      gradientDirections[Math.floor(Math.random() * 7)] +
      ', var(--tw-gradient-stops))'
  };
}
</script>
