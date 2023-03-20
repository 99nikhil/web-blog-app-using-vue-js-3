<script setup lang="ts">

import DarkAndLightModeToggle from "../UIs/DarkAndLightModeToggle.vue"
const { profilePhoto, blogUserName } = defineProps(['profilePhoto', 'blogUserName'])
</script>

<template>
    <div
        class=" dark:bg-white fixed z-40 top-0 left-0 w-full h-[6rem] bg-gradient-to-r from-lgGC3  to-lgG2 opacity-95  dark:bg-black dark:text-white p-3 flex flex-row items-center gap-3 shadow-md">


        <div class="flex flex-row gap-3 w-full">
            <div class="flex flex-row items-center ml-7">
                <q-avatar class="cursor-pointer">
                    <img :src="profilePhoto" alt="">
                </q-avatar>
                <h3
                    class="ml-3 text-3xl cursor-pointer text-transparent font-bold bg-gradient-to-r from-[#360f52] via-[#063919] to-[#8c0b37] bg-clip-text">
                    {{ blogUserName }}' blog </h3>
            </div>

            <div class="grow flex flex-row  justify-end mr-5">
                <DarkAndLightModeToggle />

            </div>

        </div>
    </div>
</template>
