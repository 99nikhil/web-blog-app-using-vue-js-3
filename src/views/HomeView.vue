
<template>
  <Header />
  <the-side-bar class="fixed top-24 left-4 dark:bg-white"></the-side-bar>
  <div class="dark:bg-black dark:text-white fixed top-20 left-[260px] shadow-lg mt-3 w-[80%] h-full p-4  overflow-scroll">
    <div class=" relative mt-4 dark:bg-black dark:text-white">
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup lang="ts">

import Header from "../components/Layouts/Header.vue";
import TheSideBar from "../components/Layouts/TheSideBar.vue";
import { useBlogStore } from '../stores/blog'
import { onMounted } from "vue"
const { getBlogPosts } = useBlogStore()

onMounted(() => {

  getBlogPosts()

})





</script>