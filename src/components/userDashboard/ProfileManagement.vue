<template>
    <div class="w-[95%] m-auto p-6 rounded-lg bg-white flex flex-col items-center mb-20">
        <h3 class="text-xl  mb-4 text-teal-600 text-bold uppercase ">Profile setting</h3>

        <div class="border-2 border-gray-500 rounded-lg mb-4 p-4 w-[80%]">

            <h3 class="text-lg text-green-700 font-semibold my-2">Edit your name</h3>
            <q-input type="text" outlined v-model="newUserName" class="w-[400px]"></q-input>
            <h3 class="text-lg text-green-700 font-semibold my-2">Edit your bio</h3>
            <q-input type="text" v-model="newUserBio" outlined class="w-[400px]"></q-input>
            <div class="my-3 ">
                <h3 class="my-2 text-lg text-teal-700 font-semibold">Your current profile photo</h3>
                <img class="w-[140px] h-[130px] rounded-lg " :src="oldProfilePhoto" alt="">
            </div>
            <h3 class="text-lg  text-green-700 font-semibold my-2">Change your profile photo</h3>
            <q-file v-model="newProfilePhoto" accept="image/*" lazy-rules :rules="[
                val => val || 'Pls your new  photo'

            ]" filled bottom-slots label="Select a profile photo" counter>
                <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="newProfilePhoto = null" class="cursor-pointer" />
                </template>

            </q-file>
            <q-btn @click="updateProfileHandler" label="save changees" color="purple"></q-btn>
        </div>

    </div>
</template>
<script setup lang="ts">

import { ref, type Ref } from "vue"
import { useBlogStore } from "@/stores/blog";
import { read } from "@popperjs/core";

const { updateABlogUser } = useBlogStore()
const { name, profilePhoto, userBio } = defineProps({
    name: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: true
    },
    userBio: {
        type: String,
        required: true
    },

})

const newUserName: Ref<string> = ref(name || "")
const newUserBio: Ref<string> = ref(userBio || "")
const oldProfilePhoto: Ref<string> = ref(profilePhoto || "")
const newProfilePhoto: Ref<any> = ref(null)
function updateProfileHandler() {



    const updatedUserData: any = {
        userBio: newUserBio.value,
        name: newUserName.value,
        profilePhoto: oldProfilePhoto.value
    }
    if (newProfilePhoto.value) {

        const reader = new FileReader();
        reader.readAsDataURL(newProfilePhoto.value)
        reader.onload = () => {
            const base64Img = reader.result
            updatedUserData.profilePhoto = base64Img
            console.log("Updating user profile :", updatedUserData)

            updateABlogUser(localStorage.getItem("u_id"), updatedUserData)
        }
    } else {
        updateABlogUser(localStorage.getItem("u_id"), updatedUserData)

    }
}



</script>