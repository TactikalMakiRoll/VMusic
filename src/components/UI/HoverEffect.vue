<template>
  <div
    class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/70 text-center backdrop-brightness-50"
  >
    <slot name:hoverContent>
      <button class="h-12 w-12">
        <img
          class="object-contain"
          src="@/publicassets/icons/play.svg"
          alt="play chosen playlist"
        />
      </button>
    </slot>
  </div>
</template>

<script setup></script>
