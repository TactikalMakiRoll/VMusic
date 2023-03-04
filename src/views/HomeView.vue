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
    </main>
  </div>
</template>

<script setup>
import NavBar from '../components/UI/NavBar.vue'
</script>
