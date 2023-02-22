<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <main>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8  w-1/4 m-auto mt-4">
      <!-- Login -->

      <div>
        <h3 class="text-xl font-bold text-fuchsia-900 mb-4 m-0 text-center">
          Login
        </h3>

        <base-input labelName="Username" inputType="text"></base-input>
        <base-input labelName="Password" inputType="text"></base-input>
        <router-link to="/dashboard"
          class="inline-block mb-4 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Login
        </router-link>

        <div class="flex items-center justify-between">
          <base-button btnName="Login In"> </base-button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </div>


    </form>
  </main>
</template>

<style scoped></style>
