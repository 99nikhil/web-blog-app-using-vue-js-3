
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Layouts/Header.vue";
import { useBlogStore } from './stores/blog.ts'

import { onMounted, ref, watch, provide } from "vue"
import getApolloClient from "./graphql/apolloClient.ts";

import router from "./router/index.ts"

import { useUserStore } from "./stores/user.ts";
import { storeToRefs } from "pinia";

const { isUserAuthenticated } = storeToRefs(useUserStore());

import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";






const { getBlogPosts } = useBlogStore()
const { isInitialBlogsLoading } = storeToRefs(useBlogStore())





router.beforeEach((to, from) => {
  console.log("Route changing :", to, from);
  if (to.meta.requiresAuth) {

    if (!localStorage.getItem('isUserLogin')) {

      return {
        name: "login",
      };
    } else {
      return true;
    }

  } else {
    return true;
  }


});




// const bar: any = ref(null)

// watch(isInitialBlogsLoading, (val) => {
//   if (!val) {
//     bar.value.stop()
//   }
// })



onMounted(() => {

  // getBlogPosts();




})

</script>


<template>
  <router-view>


  </router-view>
</template>



