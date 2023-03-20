
<script setup lang="ts">
import { RouterView } from "vue-router";
import router from "./router/index"

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
</script>


<template>
  <router-view> </router-view>
</template>



