<template>
    <div class="mb-12 dark:bg-black dark:text-white">

        <q-spinner-facebook class="m-auto mt-[12rem]" v-if="isInitialBlogsLoading" size="15rem"
            color="purple"></q-spinner-facebook>


        <RectangularBaseCard @blog-post-click="redirectToSingleBlogPost" v-else v-for="blog in blogs?.blogPosts"
            :blog="blog" />



    </div>
</template>

<script setup lang="ts">
import RectangularBaseCard from '@/components/UIs/RectangularBaseCard.vue';
import { useBlogStore } from '../stores/blog'
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router"
const router = useRouter()
const { blogs, isInitialBlogsLoading }: any = storeToRefs(useBlogStore())

function redirectToSingleBlogPost(postId: string) {
    router.push(`/blog?postId=${postId}`)
}




</script>