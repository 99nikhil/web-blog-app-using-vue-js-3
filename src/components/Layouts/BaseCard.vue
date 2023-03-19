<template>
    <div @click="emit('go-to-blog-post', blog?.postId)"
        class="w-[350px] my-4 cursor-pointer shadow-md  dark:bg-black dark:text-white">

        <q-card v-ripple flat bordered>
            <div class="flex flex-row items-center gap-3 my-2 ml-1">

                <q-avatar size="40px">

                    <img :src="blog?.author?.profilePhoto">
                </q-avatar>
                <h3 class="text-xl font-medium">{{ blog?.author?.name }}</h3>
            </div>
            <q-img height="200px " width="100%" :src="blog?.coverImage" />

            <q-card-section>

                <div class="text-h5 q-mt-sm q-mb-xs">{{ blog?.title }}</div>
                <div class="text-caption text-grey">
                    {{ blog?.brief }}
                </div>
            </q-card-section>


        </q-card>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const { blog } = defineProps(['blog'])


const emit = defineEmits(['go-to-blog-post'])
console.log("card blog", blog)
</script>