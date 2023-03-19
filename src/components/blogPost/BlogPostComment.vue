<template>
    <div class="w-[60%] m-auto mb-5 ">
        <h3 class="text-cyan-900 text-3xl font-bold text-center uppercase"> Comments</h3>
        <div v-for="comment in comments" class="flex flex-col my-4 gap-5 ">


            <div class="flex flex-row items-center  gap-3">

                <q-avatar>
                    <img :src="comment?.author?.profilePhoto" alt="avatar">
                </q-avatar>
                <div class="text-xl font-medium">{{ comment?.author?.name }}</div>
            </div>
            <div class="my-3">

                <div class="bg-zinc-200 rounded-lg mb-2 p-4 text-stone-900 font-[400]">
                    <span class="text-lg">
                        {{ comment?.text }}
                    </span>

                </div>
            </div>
        </div>

        <div class="">
            <div class="text-lg font-bold  ">Leave a reply</div>
            <div>
                <input v-model="postComment" type="text"
                    class="p-3 border-2 block my-4 w-[500px] min-h-[100px] leading-4 outline-1 outline-gray-300 max-h-full"
                    placeholder="Enter your comment">


                <button @click="commentEmitHandler"
                    class="rounded bg-teal-500 text-white p-2  text-[15px] hover:bg-teal-700 transition-all duration-75">Post
                    Comment</button>
            </div>

        </div>


    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const { comments } = defineProps(["comments"])
const postComment = ref("")
const emit = defineEmits(["add-comment"])
function commentEmitHandler() {
    if (postComment.value) {
        emit('add-comment', postComment.value)
        postComment.value = ""

    }

}

</script>