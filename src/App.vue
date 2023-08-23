<template>
    <div class="mx-auto flex h-screen max-w-[2560px] flex-col sm:flex-row xl:overflow-hidden">
        <!-- Left/top part of the app -->
        <NavBar
            class="shrink-0"
            :class="{
                'brightness-50': playlistExpanded,
                'xl:brightness-100': playlistExpanded
            }"
        ></NavBar>
        <!-- Selected page view -->
        <RouterView
            @openPlaylist="switchPlaylist"
            @sendWarning="showWarning"
            :class="{
                'brightness-50': playlistExpanded,
                'xl:brightness-100': playlistExpanded
            }"
        />
        <!-- Active playlist on the right/bottom part -->
        <ActivePlaylist
            @closePlaylist="switchPlaylist"
            v-if="playlistExpanded"
            class="absolute right-0 h-screen shrink-0 xl:static"
        ></ActivePlaylist>
    </div>
    <!-- Warning for different errors/information -->
    <Transition name="warning">
        <WarningPopup
            @popup-expired="warningVisible = false"
            v-if="warningVisible"
            >{{ warningText }}</WarningPopup
        >
    </Transition>
</template>

<script setup>
// Vue imports
import { onMounted, ref, nextTick } from 'vue';
import { RouterView, useRouter } from 'vue-router';

// Component imports
import NavBar from './components/NavBar.vue';
import ActivePlaylist from './components/ActivePlaylist.vue';
import WarningPopup from './components/UI/WarningPopup.vue';

// store and API imports
import { useProfileStore } from './stores/profile';
import { getProfileInfo } from './scripts/spotifyLogin.js';

// state variables
const profile = useProfileStore();
const router = useRouter();
const playlistExpanded = ref(false);
const warningVisible = ref(false);
const warningText = ref('');

// when entering the site, check if profile code is present in link address and use it to get profile information
onMounted(function () {
    console.log('App.vue onMounted');
    const params = new URLSearchParams(window.location.search);
    if (params.get('code')) {
        profile.userCode = params.get('code');
    }

    console.log('App.vue onMounted + profile user code: ');
    console.log(profile.userCode);

    if (profile.userCode && profile.userCode !== 'undefined') {
        fillProfileInfo();
        // Remove profile code from url
        nextTick(() => {
            // window.history.replaceState({}, 'title', 'home');
        });
    }
});

// fetch profile info and put it into store
async function fillProfileInfo() {
    const profileInfo = await getProfileInfo(profile.clientId, profile.userCode);

    if (profileInfo) {
        profile.profileInfo = profileInfo;
        router.push('/');
    } else {
        profile.profileInfo = undefined;
    }
}

// Show/hide user warning
function showWarning(text) {
    warningText.value = text;
    warningVisible.value = true;
}

// Show/hide playlist component
function switchPlaylist() {
    playlistExpanded.value = !playlistExpanded.value;
}
</script>

<style>
/* Animation styles for warning using Transition */
.warning-enter-active,
.warning-leave-active {
    transition: opacity 0.5s ease;
    transform: translateY(200%);
}

.warning-enter-to,
.warning-leave-from {
    opacity: 1;
    transform: translateY(44px);
}

.warning-enter-from,
.warning-leave-to {
    transform: translateY(200%);
    opacity: 0;
}
</style>
