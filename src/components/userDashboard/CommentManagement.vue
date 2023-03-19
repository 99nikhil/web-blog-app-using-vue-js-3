<template>
    <div>

        <h3 class="text-center font-bold text-xl text-sky-900 my-4 uppercase">comment management</h3>
        <p class="bg-white p-3 my-3 text-zinc-900 font-semibold  text-lg rounded-lg pl-10 py-5">
            <span class="text-2xl text-sky-800 font-bold">Hi,</span>
            You can see all of your comments below and you can update all the comments.
        </p>
        <div class="grid grid-cols-2 grid-flow-row gap-2">
            <CommonAdminCommentCard @delete-comment="deleteCommentHandler" @update-comment="updateCommentHandler"
                v-for="(comment, i) in userComments?.comments" :key="i" :comment="comment" />


        </div>
    </div>
</template>
<script setup lang="ts">
import CommonAdminCommentCard from "./CommonAdminCommentCard.vue"
import { useBlogCommentStore } from "@/stores/blogComment";
const { updateOneBlogComment, deleteOneBlogComment } = useBlogCommentStore()
const userComments = defineProps(["comments"])
console.log("Comments ", userComments.comments)
function updateCommentHandler(commentId: string, commentText: string) {
    console.log("updating comment", commentId, commentText)
    updateOneBlogComment(commentId, commentText)
}
function deleteCommentHandler(commentId: string) {
    console.log("Deleting comment", commentId)
    deleteOneBlogComment(commentId)
}

</script>