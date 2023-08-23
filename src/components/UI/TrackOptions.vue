<template>
    <!-- Track options button -->
    <div class="relative">
        <button
            @click="expandOptionsMenu($event)"
            class="w-9 hover:brightness-200"
        >
            <img
                src="@/publicassets/icons/dotsvertical.svg"
                alt="song settings"
            />
        </button>
        <!-- Options menu, hidden by default until clicked on expand button -->
        <div
            ref="optionsMenu"
            v-if="optionsExpanded"
            class="absolute z-50 flex flex-col flex-nowrap rounded-md border border-solid border-stone-800 bg-stone-900 text-center text-lg font-bold text-white transition-opacity duration-300"
        >
            <button
                class="inline-flex flex-nowrap gap-2 whitespace-nowrap bg-stone-900 py-3 px-5 hover:bg-stone-800"
            >
                <img
                    class="h-8 w-8 shrink-0"
                    src="@/publicassets/icons/play.svg"
                    alt=""
                />
                Play
            </button>
            <button
                class="inline-flex flex-nowrap gap-2 whitespace-nowrap bg-stone-900 py-3 px-5 hover:bg-stone-800"
            >
                <img
                    class="h-8 w-8 shrink-0"
                    src="@/publicassets/icons/playnext.svg"
                    alt=""
                />
                Play next
            </button>
            <button
                class="inline-flex flex-nowrap gap-2 whitespace-nowrap bg-stone-900 py-3 px-5 hover:bg-stone-800"
            >
                <img
                    class="h-8 w-8 shrink-0"
                    src="@/publicassets/icons/queue.svg"
                    alt=""
                />
                Add to Queue
            </button>
            <button
                class="inline-flex flex-nowrap gap-2 whitespace-nowrap bg-stone-900 py-3 px-5 hover:bg-stone-800"
            >
                <img
                    class="h-8 w-8 shrink-0"
                    src="@/publicassets/icons/like.svg"
                    alt=""
                />
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
function closeOptionsMenu(e, force = false) {
    if (force === true) {
        optionsExpanded.value = false;
        return;
    }

    const outsideClick =
        typeof e.composedPath === 'function' && !e.composedPath().includes(optionsMenu.value);
    if (outsideClick) {
        optionsExpanded.value = false;
    }
}

function expandOptionsMenu(e) {
    // if (optionsExpanded.value === true) {
    //     optionsExpanded.value = false;
    //     return;
    // }

    closeOptionsMenu(e);
    optionsExpanded.value = true;
    //using next tick (when the DOM element for menu opens) to move the menu away from screen edges
    nextTick(() => {
        optionsMenu.value.style.left =
            optionsMenu.value.style.left - optionsMenu.value.clientWidth + 'px';

        // this event listener to close the options menu is in capture mode because otherwise the menu will immediately close on opening
        document.addEventListener(
            'click',
            (e) => {
                closeOptionsMenu(e);
            },
            { capture: true }
        );
    });
}
</script>
