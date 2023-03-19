<script setup lang="ts">
import SearchInput from '../UIs/SearchInput.vue';
import DarkAndLightModeToggle from "../UIs/DarkAndLightModeToggle.vue"
import Logo from "../UIs/Logo.vue"
import { ref } from 'vue';

const isProfileDialogShown: any = ref(false)
function logoutHandler() {
  console.log("User logging out")
  localStorage.clear()
}


</script>

<template>
  <div
    class=" flex flex-row items-center justify-items-center h-[85px] fixed z-40 top-0 left-0 w-full bg-gradient-to-r from-lgGC3  to-lgG2 opacity-95  dark:bg-black dark:text-white px-4 gap-3 shadow-md">
    <router-link to="/">

      <logo></logo>
    </router-link>

    <search-input class="grow mx-7"></search-input>
    <div class="flex flex-row gap-3">

      <DarkAndLightModeToggle />




      <div class="relative">

        <div @click="isProfileDialogShown = !isProfileDialogShown" class="cursor-pointer">

          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>
          </div>
        </div>

        <div v-if="isProfileDialogShown"
          class="absolute flex flex-col items-center  gap-4 left-[-12rem] rounded-xl p-2 w-[220px] min-h-[150px] bg-white shadow-md">

          <h3 class="text-lg text-bold text-center">Your Profile</h3>

          <!-- <q-btn label="Login" color="blue"></q-btn> -->
          <router-link to="/auth/login">
            <q-btn @click="logoutHandler" label="Logout" color="green"></q-btn>
          </router-link>


        </div>
      </div>


    </div>
  </div>
</template>
