<template>
    <div @click="toggleDarkModeHandler"
        class="p-2 hover:bg-gray-200 dark:bg-gray-300  transition duration-150 ease-out rounded-full text-center  cursor-pointer">

        <svg class="w-9 h-8 dark:stroke-white dark:bg-black rounded-full stroke-teal-900 text-center " fill="none"
            viewBox="0 0 24 24">
            <path
                d="M3 11.449C3 16.724 7.169 21 12.312 21c3.959 0 7.34-2.534 8.688-6.107a8.074 8.074 0 0 1-3.515.8c-4.571 0-8.277-3.8-8.277-8.489 0-1.961.648-3.767 1.737-5.204C6.45 2.678 3 6.65 3 11.449Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const toggleDarkMode = ref(false)

function toggleDarkModeHandler() {
    toggleDarkMode.value = !toggleDarkMode.value
    if (toggleDarkMode.value) {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
}

</script>
