<template>
    <!-- Track options button -->
    <div class="relative">
        <button @click="expandOptionsMenu($event)" class="w-9 hover:brightness-200">
            <img src="icons/dotsvertical.svg" alt="song settings" />
        </button>
        <!-- Options menu, hidden by default until clicked on expand button -->
        <div ref="optionsMenu" v-if="optionsExpanded" class="flex flex-col absolute bg-stone-900 rounded-md border-stone-800 border border-solid text-center transition-opacity duration-300  font-bold z-50 flex-nowrap text-lg text-white">
            <button class="py-3 px-5 bg-stone-900 hover:bg-stone-800 inline-flex gap-2 whitespace-nowrap flex-nowrap">
                <img class="shrink-0 w-8 h-8" src="icons/play.svg" alt="">
                Play
            </button>
            <button class="py-3 px-5 bg-stone-900 hover:bg-stone-800 inline-flex gap-2 whitespace-nowrap flex-nowrap">
                <img class="shrink-0 w-8 h-8" src="icons/playnext.svg" alt="">
                Play next
            </button>
            <button class="py-3 px-5 bg-stone-900 hover:bg-stone-800 inline-flex gap-2 whitespace-nowrap flex-nowrap">
                <img class="shrink-0 w-8 h-8" src="icons/queue.svg" alt="">
                Add to Queue
            </button>
            <button class="py-3 px-5 bg-stone-900 hover:bg-stone-800 inline-flex gap-2 whitespace-nowrap flex-nowrap">
                <img class="shrink-0 w-8 h-8" src="icons/like.svg" alt="">
                Add to favorites
            </button>
            <slot name="otherOptions"></slot>
        </div>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';

const optionsExpanded = ref(false);
const optionsMenu = ref(null);

// calculating whether the click happened outside the opened options menu. Force attribute is there for click listeners on menu options
function closeOptionsMenu(e, force = false){
    if(force === true){
        optionsExpanded.value = false;
        return;
    }

    const outsideClick = typeof e.composedPath === 'function' &&  !e.composedPath().includes(optionsMenu.value);
    if(outsideClick){
        optionsExpanded.value = false;
    }
}

function expandOptionsMenu(e){
    closeOptionsMenu(e);
    optionsExpanded.value = true;
    //using next tick (when the DOM element for menu opens) to move the menu away from screen edges
    nextTick(()=>{
        optionsMenu.value.style.left = optionsMenu.value.style.left - optionsMenu.value.clientWidth + "px";

        // this event listener to close the options menu is in capture mode because otherwise the menu will immediately close on opening
        document.addEventListener("click", (e)=>{
            closeOptionsMenu(e);
        }, {capture: true});
    });
}

</script>