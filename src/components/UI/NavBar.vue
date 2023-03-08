<template>
  <nav class="inline-flex h-screen flex-col justify-center gap-9 bg-[rgba(19,19,19,1)] py-12 px-12">
    <img
      class="w-10 cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-2 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
      src="icons/logo.svg"
      alt="logo"
    />
    <ul class="mx-1 flex flex-col justify-center gap-9">
      <li class="cursor-pointer hover:brightness-200">
        <img class="w-8" src="icons/home.svg" alt="home page" />
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <img class="w-8" src="icons/search.svg" alt="search page" />
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <img class="w-8" src="icons/like.svg" alt="favourites page" />
      </li>
      <li class="cursor-pointer hover:brightness-200">
        <img class="w-8" src="icons/trending.svg" alt="trending page" />
      </li>
    </ul>
    <img
      class="mt-auto w-8 cursor-pointer hover:brightness-200"
      src="icons/logout.svg"
      alt="log out"
    />
  </nav>
</template>

<script setup></script>
