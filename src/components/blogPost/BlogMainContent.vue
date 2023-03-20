<template>
    <div class="relative top-36 flex flex-col items-center dark:bg-black dark:text-white">
        <div class=" w-[75%] m-auto p-5 mb-4">
            <div class="flex flex-col items-center gap-5 mb-7">
                <q-img :src="blog?.coverImage" class="w-[700px] h-[500px]" spinner-color="white" />

                <h2 class="text-center text-5xl font-medium "> {{ blog?.title }}</h2>
                <div class="flex flex-row items-center gap-4">
                    <q-avatar class="cursor-pointer">
                        <q-img
                            :src="blog?.author?.profilePhoto || 'https://pbs.twimg.com/profile_images/1608062426775441410/_InEziap_400x400.jpg'"
                            spinner-color="white " />
                    </q-avatar>

                    <h6 class="text-md text-gray-900 font-medium  "> &bull; {{ new Date(blog?.updatedAt).toDateString() ||
                        new Date(blog?.createdAt).toDateString() }}</h6>
                    <h4>{{ blog?.brief }}</h4>

                    <h4 class="text-md text-gray-900 font-medium  ">
                        <span>
                            &bull;
                        </span>
                        <svg class="mx-2 inline w-8 h-8 cursor-pointer" viewBox="0 0 576 512">
                            <path
                                d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z">
                            </path>
                        </svg>

                        <span>
                            6 min read
                        </span>
                    </h4>
                </div>

            </div>

            <div>
                <div class="leading-9 indent-44 tracking-wide text-2xl font-small antialiased" v-html="blog?.content">


                </div>

            </div>




            <BlogPostAuthorInfo :author="blog.author" />
        </div>

        <div class="py-[2px] bg-gray-300 w-[85%] rounded opacity-50 m-auto my-2"></div>


        <div class="bg-white w-full mt-10  py-4 ">
            <h2 class="text-center mb-5 text-2xl font-medium text-zinc-600 uppercase  ">MORE ARTICLES</h2>
            <div class=" mx-4 flex flex-row gap-8 justify-center mb-10  ">
                <base-card @go-to-blog-post="relatedBlogPostHandler" v-for="blog in relatedBlogs" :blog="blog"></base-card>


            </div>

            <!-- <div>
                <h3 v-if="loading">loading ...</h3>
                <h4 v-else-if="error">{{ error }}</h4>
                <div v-else>{{ result }}</div>

            </div> -->




        </div>
        <div class="py-[2px] bg-gray-300 w-[85%] rounded opacity-50 mx-auto"></div>
        <div class="w-full h-full dark:bg-white dark:text-black">

            <div class="p-4 w-[80%] m-auto ">


                <blog-post-comment @add-comment="addUserCommentHandler" :comments="postComments"></blog-post-comment>



            </div>

        </div>
        <div class="py-[2px] bg-gray-300 w-[85%] rounded opacity-50 mx-auto"></div>
        <div class="bg-black w-full mt-12 p-5 mb-0">

            <h2 class="text-white text-3xl font-bold text-center"> Footer</h2>

        </div>
    </div>
</template>
<script setup lang="ts">
import BlogPostAuthorInfo from "./BlogPostAuthorInfo.vue"
import BlogPostComment from "./BlogPostComment.vue"

import BaseCard from "../Layouts/BaseCard.vue"
import { v4 as uuidv4 } from 'uuid';
import * as Realm from "realm-web"

import { useBlogCommentStore } from "@/stores/blogComment";

import { watch, computed } from "vue"
import { useQuery } from "@vue/apollo-composable";
import { BLOG_POSTS_BY_AUTHOR_ID } from "../../graphql/BlogQueries"

import { useRouter } from "vue-router";
interface Blog {
    author: Object,
    brief: String,
    content: String,
    coverImage: String,
    createdAt?: Date,
    postComments?: Array<Object>,
    title: String,
    tags: Array<String>,

    updatedAt?: Date,
}
const router = useRouter()
const { blog, postComments } = defineProps(["blog", "postComments"])
console.log("One blog post view:", blog.author)
const { insertOneBlogComment } = useBlogCommentStore();

console.log("user id", blog?.author?.userId)
const { result, loading, error } = useQuery(BLOG_POSTS_BY_AUTHOR_ID, {

    authorId: blog?.author?.userId

})
watch(result, (val) => {
    console.log("getting blogs by author name", val)

})


const relatedBlogs = computed(() => {
    return result.value?.blogPosts.filter((blg: any) => blg?.title !== blog?.title);
})
const { BSON } = Realm;

function relatedBlogPostHandler(postid: string) {
    // console.log("base card post id", postid)
    window.open(`/blog?postId=${postid}`, "_blank")
    // router.push(`/blog?postId=${postid}`)
}


function addUserCommentHandler(comment: string) {
    const newCommentData = {
        commentId: uuidv4(),
        createdAt: new Date().toISOString(),
        post: {
            link: new BSON.ObjectID(blog?._id)
        },
        text: comment,
        author: {
            link: new BSON.ObjectID(localStorage.getItem("u_obj_id") || "")
        }
    }

    insertOneBlogComment(newCommentData)


}
// console.log(new Date(blog?.createdAt).toLocaleDateString())
</script>