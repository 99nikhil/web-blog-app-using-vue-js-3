<template>
    <div
        class="fixed top-[5rem]  z-10 rounded-lg min-h-[600px] w-[300px] bg-gradient-to-tl from-[#f2ae5b] to-[#c1f144] opacity-95 py-4">

        <h2 class="text-center text-[28px] text-emeral-700 font-bold ">User Admin</h2>

        <h3 @click="$emit('select-user-setting', 'blog')"
            class="cursor-pointer text-center text-lg bg-white text-cyan-800 uppercase font-bold p-2 m-2 rounded-lg ">
            blog
            management</h3>
        <h3 @click="$emit('select-user-setting', 'profile')"
            class="cursor-pointer text-center  text-lg bg-white text-green-800 uppercase font-bold p-2 m-2 rounded-lg ">
            Profile
            setting</h3>
        <h3 @click="$emit('select-user-setting', 'comment')"
            class="cursor-pointer text-center  text-lg bg-white text-green-800 uppercase font-bold p-2 m-2 rounded-lg ">
            comments
            setting</h3>


    </div>
</template>
<script setup lang="ts">

const emit = defineEmits(["select-user-setting"])
</script>