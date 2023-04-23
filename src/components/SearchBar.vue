<template>
<!-- Search bar and profile -->
<div class="flex flex-wrap gap-4 md:gap-9">
    <input
        class="flex-1 rounded-full bg-[rgb(28,27,28)] px-6 py-4 text-[rgb(187,187,187)] placeholder:text-[rgb(119,119,119)] sm:px-9 sm:py-4"
        type="text"
        placeholder="Search for song, artist, lyrics..."
    />
    <div class="mx-auto mt-2 flex items-center gap-4 sm:mt-0">
        <!-- Profile -->
        <div class="flex cursor-pointer items-center relative group" aria-expanded="false">
            <img class="h-11 w-11 rounded-full" src="/images/profile.png" alt="profile icon" />
            <span class="mr-4 ml-3">{{ profile.profileName }}</span>
            <button class="w-8 shrink-0 group-hover:brightness-200">
                <img class="object-contain" src="icons/expand.svg" alt="Open profile menu" />
            </button>
            <div class="absolute bg-stone-900 w-full rounded-md border-stone-800 border border-solid text-center bottom-[-100%] transition-opacity duration-300 py-2 opacity-0 group-hover:opacity-100 font-bold">
                <button v-if="profile.userCode">Log out</button>
                <button @click="authenticateUser" v-else>Log In</button>
            </div>
        </div>
        <!-- Button for active playlist -->
        <button @click="$emit('openPlaylist')" class="w-12 shrink-0 rounded-full px-2 py-2 relative">
            <img class="object-contain" src="icons/radio.svg" alt="expand current playlist/song" />
            <div class="top-0 left-0 absolute inline-flex h-full w-full rounded-full bg-purple-400"
                :class="{
                    'animate-ping': true,
                    'opacity-0' : false,
                }">
            </div>
        </button>
        <button @click="logoutUser();" class="w-12 shrink-0 rounded-full px-2 py-2 relative">RESET
        </button>
    </div>
</div>
</template>

<script setup>
import { performLogin } from '../scripts/spotifyLogin.js';

import { useProfileStore } from '../stores/profile';

import { useRouter } from 'vue-router';

const profile = useProfileStore();
const router = useRouter();

async function authenticateUser(){
    profile.profileInfo = await performLogin(profile.clientId);
}

function logoutUser(){
    profile.$reset();
    router.replace({ path: '/' });
}


</script>