<template>
    <div class="mb-[10rem] ">

        <div class="bg-white rounded-lg p-4">

            <h3 class="text-center text-[28px] text-rose-600 font-bold ">
                You can <span class="uppercase  text-cyan-900 text-[1.5rem]">
                    create edit

                </span> and <span class="uppercase  text-cyan-900 text-[1.5rem]">
                    delete

                </span> your post here.</h3>
            <div class="flex flex-row justify-center my-3">
                <q-btn @click="emit('show-editor')" class="m-2" label="Create a post" color="green"></q-btn>

            </div>
        </div>


        <div class=" flex flex-col items-center">

            <slot name="blogDataTable">

            </slot>

        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['show-editor'])


</script>