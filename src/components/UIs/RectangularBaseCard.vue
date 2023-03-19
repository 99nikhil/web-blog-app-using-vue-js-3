<template>
    <div class="q-pa-md row items-start q-gutter-md    cursor-pointer">
        <q-card @click="emit('blog-post-click', blog?.postId)" v-ripple class="my-card min-w-[800px] w-full " flat bordered>
            <div class="flex flex-row m-3">
                <q-avatar>
                    <img :src="blog?.author?.profilePhoto">
                </q-avatar>
                <div class="flex flex-col mx-3">

                    <div class="text-xl font-medium">{{ blog.author?.name }}</div>
                    <div> <span class="text-emerald-900  ">{{ blog.author?.blogHandle }} </span><span
                            class="italic text-teal-700">&bull; {{ `${postAge?.diffInDays
                                <= 0 ? "" : postAge?.diffInDays + " days"} ${postAge?.diffInHours <= 0 ? "" :
                                    postAge?.diffInHours + " hours"} ${postAge?.diffInMinutes <= 0 ? "1 min ago" :
                                        postAge?.diffInMinutes + " mins ago"} ` }}</span>
                    </div>

                </div>
            </div>

            <q-separator />

            <q-card-section horizontal class="dark:bg-black dark:text-white">
                <q-card-section class="q-pt-xs">

                    <div class="text-2xl font-bold">{{ blog.title }}</div>
                    <div class="text-[18px] ">
                        {{ blog.brief }}
                    </div>
                </q-card-section>

                <q-card-section class="">
                    <q-img height="170px" width="280px" class="rounded-borders" :src="blog.coverImage" />
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat round color="green" icon="bookmark" />
                <q-badge v-for="tag in blog.tags" class="mr-2" color="teal" outline rounded :label="tag" />
            </q-card-actions>
        </q-card>


    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const emit = defineEmits(["blog-post-click"])

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
const { blog } = defineProps({
    blog: Object as Blog
})


const postAge = computed(() => {
    const timeDiff: any = new Date() - new Date(blog?.createdAt)
    const diffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const diffInMinutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    return { diffInDays, diffInHours, diffInMinutes }
})










// import RoundedAvatar from './RoundedAvatar.vue';

// interface Blog {
//     title: String,
//     author: String,
//     brief: String,
//     addedDate: String,
//     userID?: String,
//     readingTime?: String
// }
// const { title, author, brief, addedDate, userID } = defineProps<Blog>()

</script>