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
            <div
                class="group relative flex cursor-pointer items-center"
                aria-expanded="false"
            >
                <img
                    class="h-14 w-14 rounded-full"
                    :src="profilePicture"
                    alt="profile icon"
                />
                <span
                    class="mr-4 ml-3 text-xl font-bold group-hover:text-purple-600 group-hover:brightness-200"
                    >{{ profileName }}</span
                >
                <button class="w-8 shrink-0 group-hover:text-green-700 group-hover:brightness-200">
                    <img
                        class="object-contain"
                        src="@/publicassets/icons/expand.svg"
                        alt="Open profile menu"
                    />
                </button>
                <div
                    class="absolute bottom-[-100%] w-full rounded-md border border-solid border-stone-800 bg-stone-900 py-2 text-center font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <button
                        @click="logoutUser()"
                        v-if="profile.userCode"
                    >
                        Log out
                    </button>
                    <button
                        @click="authenticateUser"
                        v-else
                    >
                        Log In
                    </button>
                </div>
            </div>
            <!-- Button for active playlist -->
            <button
                @click="$emit('openPlaylist')"
                class="relative w-12 shrink-0 rounded-full px-2 py-2"
            >
                <img
                    class="object-contain"
                    src="@/publicassets/icons/radio.svg"
                    alt="expand current playlist/song"
                />
                <div
                    class="absolute top-0 left-0 inline-flex h-full w-full rounded-full bg-purple-400"
                    :class="{
                        'animate-ping': true,
                        'opacity-0': false
                    }"
                ></div>
            </button>
        </div>
    </div>
</template>

<script setup>
// Vue imports
import { useRouter } from 'vue-router';
import { computed } from 'vue';

// store and API imports
import { performLogin } from '../scripts/spotifyLogin.js';
import { useProfileStore } from '../stores/profile';

// state variables
const profile = useProfileStore();
const router = useRouter();
import defaultProfilePicture from '@/publicassets/images/profile.png';

const profilePicture = computed(() => {
    if (profile.profileInfo && profile.profileInfo.images[0]) {
        return profile.profileInfo.images[0].url;
    } else {
        return defaultProfilePicture;
    }
});

const profileName = computed(() => {
    if (profile.profileInfo) {
        return profile.profileInfo.display_name;
    } else {
        return 'Guest';
    }
});

async function authenticateUser() {
    await performLogin(profile.clientId);
}

function logoutUser() {
    profile.$reset();
    router.replace({ path: '/' });
    localStorage.clear();
}
</script>
