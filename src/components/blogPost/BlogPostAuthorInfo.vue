<template>
    <q-card class="my-16 p-5 flex flex-row gap-4 cursor-pointer">


        <div class="">

            <q-avatar size=" 70px">

                <img :src="author?.profilePhoto">
            </q-avatar>
        </div>


        <div class="w-[80%]">

            <div class="uppercase text-gray-600 font-bold"> written by</div>
            <div class="font-bold text-xl mt-1 text-teal-700">{{ author?.name }}</div>
            <div class="tracking-wide text-lg mt-4 mb-1">
                {{ author?.userBio }}
            </div>
        </div>


    </q-card>
</template>
<script setup lang="ts">
interface Author {
    name: string,
    profilePhoto: string,
    userBio: string
}
const { author } = defineProps({
    author: Object as Author
})
console.log("author ", author)


</script>