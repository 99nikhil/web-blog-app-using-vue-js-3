<template>
    <div class="mb-12 dark:bg-black dark:text-white">

        <q-spinner-facebook class="m-auto mt-[12rem]" v-if="isInitialBlogsLoading" size="15rem"
            color="purple"></q-spinner-facebook>


        <RectangularBaseCard @blog-post-click="redirectToSingleBlogPost" v-else v-for="blog in blogs?.blogPosts"
            :blog="blog" />



    </div>

    <!--  title="This is title" brief="blogDescription" userID="has.dev.node" author="Suzy Ivy"
        addedDate="2021-2-12" reading-time="8 mins" -->
</template>

<script setup lang="ts">
import RectangularBaseCard from '@/components/UIs/RectangularBaseCard.vue';
import { useBlogStore } from '../stores/blog.ts'
import { onMounted, watch } from "vue"
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router"
const router = useRouter()
const { blogs, isInitialBlogsLoading } = storeToRefs(useBlogStore())

function redirectToSingleBlogPost(postId: string) {

    console.log("card clicking", postId)
    router.push(`/blog?postId=${postId}`)
}


onMounted(() => {
    console.log("Blogs in home blogs view", blogs.value)
})



</script>