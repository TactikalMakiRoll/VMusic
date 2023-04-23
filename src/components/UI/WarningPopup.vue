<template>
    <div class="inline-block bg-[rgba(19,19,19,1)] px-6 pt-4 border-2 border-zinc-800 border-solid absolute bottom-0 left-1/2 translate-x-[-50%] text-[#a5a5a5] text-lg rounded-t-lg">
        <slot>This is a warning message about something. Can contain buttons or such</slot>
        <div class="w-full mt-4 h-[1px] bg-red-100"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>