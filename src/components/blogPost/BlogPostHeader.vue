<script setup lang="ts">

import DarkAndLightModeToggle from "../UIs/DarkAndLightModeToggle.vue"
import Logo from "../UIs/Logo.vue"
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
            <!-- <div
                    class="hover:bg-gray-200  transition duration-100 ease-in  cursor-pointer rounded-full p-2 text-center">

                            <svg class="w-8 h-8 stroke-teal-900 text-center" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>

                        </div> -->

            </div>

        </div>
    </div>
</template>
