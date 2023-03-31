<template>
  <main class="flex h-screen grow flex-col overflow-hidden py-10 px-8">
    <!-- Search bar and profile -->
    <div class="flex flex-wrap gap-4 md:gap-9">
      <input
        class="flex-1 rounded-full bg-[rgb(28,27,28)] px-6 py-4 text-[rgb(187,187,187)] placeholder:text-[rgb(119,119,119)] sm:px-9 sm:py-4"
        type="text"
        placeholder="Search for song, artist, lyrics..."
      />
      <div class="mx-auto mt-2 flex items-center gap-4 sm:mt-0">
        <!-- Profile -->
        <div class="flex cursor-pointer items-center" aria-expanded="false">
          <img class="h-11 w-11 rounded-full" src="/images/profile.png" alt="profile icon" />
          <span class="mr-4 ml-3">Alex</span>
          <button class="w-8 shrink-0 group-hover:brightness-200">
            <img class="object-contain" src="icons/expand.svg" alt="Open profile menu" />
          </button>
        </div>
        <!-- Button for active playlist -->
        <button class="w-12 shrink-0 rounded-full px-2 py-2">
          <img class="object-contain" src="icons/radio.svg" alt="expand current playlist/song" />
        </button>
      </div>
    </div>
    <!-- Albums -->
    <section class="mt-8 md:mt-16">
      <h2 class="text-xl font-bold capitalize">Recently Listened Albums</h2>
      <div class="mt-8 flex flex-wrap gap-5">
        <div
          class="flex aspect-[1.4] w-5/12 grow flex-col overflow-hidden rounded-lg brightness-90 hover:cursor-pointer xl:w-auto"
          :style="createGradientStops()"
          v-for="n in 4"
        >
          <div class="grow-1 mt-auto bg-black/40 py-6 pl-6 backdrop-blur-3xl">
            <h3 class="font-bold">Hip-Hop</h3>
            <p class="text-[rgb(214,214,214)]">120 new songs</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Trending songs -->
    <section class="mt-16 min-h-0 flex-1">
      <h2 class="text-xl font-bold capitalize">Trending Right Now</h2>
      <div
        class="mt-9 max-h-[calc(100%-5rem)] snap-y snap-end snap-always overflow-y-auto [mask-image:linear-gradient(180deg,black_0%,black_75%,transparent_100%)]"
        @scroll="changeFadeOnScroll($event, true)"
      >
        <div v-for="n in 10" class="mb-9 flex items-center">
          <div class="flex items-center">
            <h4 class="mr-6 text-lg font-bold text-[rgba(133,133,134,1)]">01</h4>
            <img class="h-20 w-20 rounded-sm" src="images/trackCover.jpg" alt="song image" />
          </div>
          <div class="ml-5 capitalize text-[rgba(154,154,154,1)]">
            <h3 class="text-lg font-bold text-[rgb(214,214,214)]">Millions</h3>
            <p>Always never</p>
          </div>
          <div class="ml-auto mr-16 flex items-center gap-16 capitalize text-[rgba(154,154,154,1)]">
            <p>Always never</p>
            <p>8.069 542</p>
            <p>3:58</p>
            <button class="mb-0.5 h-6 w-6 hover:brightness-200">
              <img class="object-contain" src="icons/like.svg" alt="like image" />
            </button>
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
</template>

<script setup>
// const props = defineProps({
//   showMenuIcon: Boolean
// });

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

function horizontalScroll(e, speed = 500) {
  e.preventDefault();
  if (e.deltaY > 0) {
    e.currentTarget.scrollBy({ left: +speed, behaviour: 'smooth' });
  } else {
    e.currentTarget.scrollBy({ left: -speed, behaviour: 'smooth' });
  }
}

function changeFadeOnScroll(e, isVertical = true) {
  let scrolledAmount = isVertical ? e.currentTarget.scrollTop : e.currentTarget.scrollLeft;
  let elementSize = isVertical ? e.currentTarget.clientHeight : e.currentTarget.clientWidth;
  let fullSize = isVertical ? e.currentTarget.scrollHeight : e.currentTarget.scrollWidth;
  let gradientDegrees = isVertical ? 180 : 90;

  // calculate the percentage of element that will be faded out starting from 75 and based on how much percentage is already scrolled
  let fadePercentage =
    75 + Math.floor((((scrolledAmount * 100) / (fullSize - elementSize)) * 25) / 100);

  e.currentTarget.setAttribute(
    'style',
    `mask-image:linear-gradient(${gradientDegrees}deg,black 0%,black ${fadePercentage}%,transparent 100%)`
  );
}
</script>
