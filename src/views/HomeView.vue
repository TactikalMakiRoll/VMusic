<template>
  <div class="flex">
    <NavBar class="shrink-0"></NavBar>
    <!-- Central part -->
    <main class="flex h-screen grow flex-col overflow-hidden py-10 px-8">
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
      <section
        class="mt-16 min-h-0 flex-1 [mask-image:linear-gradient(180deg,black_0%,black_75%,transparent_100%)]"
      >
        <h2 class="text-xl font-bold capitalize">Trending Right Now</h2>
        <div class="mt-9 max-h-[calc(100%-5rem)] snap-y snap-end snap-always overflow-y-auto">
          <div class="flex items-center">
            <div class="flex items-center">
              <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
              <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
            </div>
            <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
              <h3 class="font-bold text-[rgb(214,214,214)]">Millions</h3>
              <p>Always never</p>
            </div>
            <div
              class="ml-auto mr-16 flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]"
            >
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
            <div
              class="ml-auto mr-16 flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]"
            >
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
            <div
              class="ml-auto mr-16 flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]"
            >
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
            <div
              class="ml-auto mr-16 flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]"
            >
              <p>Always never</p>
              <p>8.069 542</p>
              <p>3:58</p>
              <button><img class="mb-0.5 h-6 w-6" src="icons/like.svg" alt="like image" /></button>
            </div>
          </div>
        </div>
      </section>
      <!-- Recent Favourites -->
      <section class="flex w-full shrink-0 flex-col">
        <div class="flex">
          <h2 class="text-xl font-bold capitalize">Recent Favourites</h2>
          <button class="ml-auto text-[rgba(0,178,255,1)]">View all</button>
        </div>
        <div
          id="favSongs"
          class="scrollbar-hide mt-9 flex w-full grow-0 flex-nowrap gap-9 overflow-x-auto scroll-smooth pb-2 [mask-image:linear-gradient(90deg,black_0%,black_65%,transparent_100%)]"
          @wheel="horizontalScroll($event)"
        >
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
                src="images/trackCover.jpg"
                alt="song cover"
              />
            </div>
            <h3 class="mt-4 font-bold">Alone With You</h3>
            <p class="text-[rgba(133,133,134,1)]">Alina Baraz</p>
          </div>
          <div>
            <div class="relative h-32 w-32">
              <img
                class="absolute top-0 left-0 h-full w-full object-cover"
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

function debounce(func, waitTime = 250) {
  let timeout;
  return (...args) => {
    console.log(timeout);
    if (!timeout) {
      func.apply(this, args);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
      }, waitTime);
    }
  };
}

const horizontalScroll = debounce((e, ...args) => {
  if (e.deltaY > 0) {
    e.currentTarget.scrollBy({ left: +200, behaviour: 'smooth' });
    e.preventDefault();
  } else {
    e.currentTarget.scrollBy({ left: -200, behaviour: 'smooth' });
    e.preventDefault();
  }
}, 350);
</script>
