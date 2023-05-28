<template>
    <nav
        class="inline-flex items-center justify-center gap-4 bg-[rgba(19,19,19,1)] py-8 px-8 sm:h-screen sm:flex-col sm:justify-start sm:gap-9 md:py-12 md:px-12"
    >
        <!-- Home page / logo -->
        <button
            class="mb-1 w-10 cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-2 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 sm:mb-0"
        >
            <img
                class="object-contain"
                src="@/publicassets/icons/logo.svg"
                alt="logo"
            />
        </button>
        <!-- Search, Favorites and Trending pages -->
        <ul class="mx-1 flex items-center justify-center gap-4 sm:flex-col sm:gap-9">
            <li class="cursor-pointer hover:brightness-200">
                <button class="w-8">
                    <img
                        class="object-contain"
                        src="@/publicassets/icons/search.svg"
                        alt="Search page"
                    />
                </button>
            </li>
            <li class="cursor-pointer hover:brightness-200">
                <button class="w-8">
                    <img
                        class="object-contain"
                        src="@/publicassets/icons/like.svg"
                        alt="Favorites page"
                    />
                </button>
            </li>
            <li class="cursor-pointer hover:brightness-200">
                <button class="w-8">
                    <img
                        class="object-contain"
                        src="@/publicassets/icons/trending.svg"
                        alt="Trending page"
                    />
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup></script>
