<template>
    <div class="w-full h-full backdrop-brightness-50 bg-black/70 absolute top-0 left-0 text-center flex items-center justify-center">
        <slot name:hoverContent>
            <button class="h-12 w-12">
                <img class="object-contain" src="icons/play.svg" alt="play chosen playlist" />
            </button>
        </slot>
    </div>
</template>

<script setup>
</script>
