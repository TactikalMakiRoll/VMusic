<template>
  <nav
    class="inline-flex items-center justify-center gap-4 bg-[rgba(19,19,19,1)] py-8 px-8 sm:h-screen sm:flex-col sm:justify-start sm:gap-9 md:py-12 md:px-12"
  >
    <button
      class="mb-1 w-10 cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-2 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 sm:mb-0"
    >
      <img
        class="object-contain"
        src="@/../public/icons/logo.svg"
        alt="logo"
      />
    </button>
    <ul class="mx-1 flex items-center justify-center gap-4 sm:flex-col sm:gap-9">
      <li class="cursor-pointer hover:brightness-200">
        <button class="w-8">
          <img
            class="object-contain"
            src="@/../public/icons/home.svg"
            alt="home page"
          />
        </button>
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <button class="w-8">
          <img
            class="object-contain"
            src="@/../public/icons/search.svg"
            alt="search page"
          />
        </button>
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <button class="w-8">
          <img
            class="object-contain"
            src="@/../public/icons/like.svg"
            alt="favourites page"
          />
        </button>
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <button class="w-8">
          <img
            class="object-contain"
            src="@/../public/icons/trending.svg"
            alt="trending page"
          />
        </button>
      </li>
    </ul>
    <!-- <button class="mt-auto w-8 cursor-pointer hover:brightness-200">
      <img class="object-contain" src="icons/logout.svg" alt="log out" />
    </button> -->
  </nav>
</template>

<script setup></script>
