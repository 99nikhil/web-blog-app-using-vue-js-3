<template>
    <div class="w-[800px] h-[180px] bg-white shadow-md  rounded-3xl my-3 ">

        <div class="flex flex-row gap-4 justify-center ">
            <div class=" flex  items-center  min-w-[420px]  w-[500px] max-w-full h-[75px] max-h-[85px] p-2 my-4">
                <h3 class="text-lg my-1 text-teal-700">{{ title }}</h3>
                <h3 class="text-lg my-1 text-orange-600   overflow-y-hidden">{{ brief }}</h3>
                <h3 class="text-lg text-purple-600 "><span>Last updated at:</span> {{ new Date(createdAt).toDateString() }}
                </h3>

            </div>
            <div class="flex flex-col gap-2 p-4 mt-5">

                <q-btn @click="emit('show-update-editor', postId)" color="teal" label="Edit a post"></q-btn>
                <q-btn @click="emit('delete-post', postId)" color="red" label="Delete a post"></q-btn>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const emit = defineEmits(['show-update-editor', 'delete-post'])

const { title, createdAt, brief, postId } = defineProps({

    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }

})


</script>