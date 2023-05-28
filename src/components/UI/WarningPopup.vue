<template>
    <!-- A popup for user errors/warnings -->
    <div
        ref="notificationBox"
        class="absolute bottom-0 left-1/2 inline-block translate-x-[-50%] rounded-t-lg border-2 border-solid border-zinc-800 bg-[rgba(19,19,19,1)] px-6 pt-4 text-lg text-[#a5a5a5]"
    >
        <slot>Something went wrong</slot>
        <!-- Progress bar that shows when the popup will become hidden again -->
        <div
            ref="progressBar"
            class="relative right-6 mt-4 h-[2px] w-[0px] bg-gradient-to-r from-red-600 to-purple-700"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['popupExpired']);

const progressBar = ref(null);
const notificationBox = ref(null);

// When component appears, count five seconds and hide it
onMounted(() => {
    progressBar.value.classList.add('animate-timer');
    setTimeout(() => {
        emit('popupExpired');
    }, 5000);
});
</script>

<style>
.animate-timer {
    animation: notificationTimer 5s linear forwards;
}

/* Simple progress bar animation using width manipulation */
@keyframes notificationTimer {
    0% {
        width: 0px;
    }
    100% {
        width: calc(100% + 3rem);
    }
}
</style>
