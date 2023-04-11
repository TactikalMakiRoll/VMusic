<template>
    <div class="relative">
        <button @click="expandOptionsMenu($event)" class="w-9 hover:brightness-200">
            <img src="icons/dotsvertical.svg" alt="song settings" />
        </button>
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

function closeOptionsMenu(e){
    const outsideClick = typeof e.composedPath === 'function' &&  !e.composedPath().includes(optionsMenu.value);
    if(outsideClick){
        optionsExpanded.value = false;
    }
}

function expandOptionsMenu(e){
    optionsExpanded.value = true;
    e.stopPropagation();
    nextTick(()=>{
        console.log(e.currentTarget.getBoundingClientRect());
        optionsMenu.value.style.left = optionsMenu.value.style.left - optionsMenu.value.clientWidth + "px";

        document.addEventListener("click", (e)=>{
            closeOptionsMenu(e);
        });
    });
}

</script>