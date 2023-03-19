<template>
    <div class="w-[380px] bg-white p-5 rounded-3xl m-2 mb-32">
        <div class="">

            <div class="flex flex-col gap-3 justify-center">
                <div class="flex flex-row gap-3 items-center">

                    <h3 class="text-teal font-semibold">Title</h3>
                    <h3 class=" border-[1px] rounded-lg pl-3 border-cyan-500 text-sm mt-2 mb-1 p-3 font-medium">
                        {{ userComment?.comment?.post?.title }}
                    </h3>
                </div>

                <div class="flex flex-row gap-3 items-center">
                    <h3 class="text-teal font-semibold"> Brief</h3>
                    <h3 class="border-[1px] w-[80%]  rounded-lg pl-3 border-cyan-500 text-sm mt-2 mb-1  p-2 font-medium">
                        {{
                            userComment?.comment?.post?.brief }}</h3>
                </div>

                <q-input outlined v-model="comment"></q-input>
                <div class="self-center flex gap-6 mt-4">
                    <q-btn @click="updateCommentEmit" label="update " color="cyan"></q-btn>
                    <q-btn @click="emit('delete-comment', userComment?.comment?.commentId)" label="delete"
                        color="red"></q-btn>
                </div>

            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const userComment: any = defineProps(["comment"])
const comment = ref(userComment?.comment?.text || "comment text")
const emit = defineEmits(["update-comment", "delete-comment"])
function updateCommentEmit() {
    emit('update-comment', userComment?.comment?.commentId, comment.value)

}



</script>