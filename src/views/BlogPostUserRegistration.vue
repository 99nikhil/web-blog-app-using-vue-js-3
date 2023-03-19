<template>
    <div class="w-full  h-full min-h-screen bg-gradient-to-tl from-[#D87C1E] via-[#86A8E7] to-[#5FFBF1] p-4 ">
        <div class="border-2 border-sky-600 rounded-lg p-5 text-center text-cyan-900 text-2xl font-bold">Welcome to a new
            journey of
            writing blog.
        </div>


        <div class="w-[700px] bg-white m-auto min-h-[300px] h-full mt-10 p-4 rounded-lg shadow-xl">

            <logo></logo>

            <q-form class=" bg-white shadow-lg rounded px-8 py-6 min-h-[400px]  w-1/2 m-auto mt-1 "
                @submit.prevent="newBlogUserRegistrationHandler">

                <h3 class="block text-gray-700 text-sm font-bold mb-2">Username</h3>

                <q-input lazy-rules :rules="[
                    val => val && val.length > 0 || 'Pls enter something'

                ]" v-model="blogUsername" outlined></q-input>

                <h3 class="block text-gray-700 text-sm font-bold mb-2">Profile photo</h3>

                <q-file lazy-rules :rules="[
                    val => val || 'Pls select a photo'

                ]" filled bottom-slots v-model="profilePhoto" label="Select a profile photo" counter>
                    <template v-slot:prepend>
                        <q-icon name="cloud_upload" @click.stop.prevent />
                    </template>
                    <template v-slot:append>
                        <q-icon name="close" @click.stop.prevent="profilePhoto = null" class="cursor-pointer" />
                    </template>

                    <template v-slot:hint>
                        Field hint
                    </template>
                </q-file>

                <h3 class="block text-gray-700 text-sm font-bold mb-2">Bio</h3>

                <q-input lazy-rules hint="Tell me something about yourself" :rules="[
                    val => val && val.length > 0 || 'Please don\'t leave blank']" v-model="blogUserBio"
                    outlined></q-input>



                <q-btn class="my-5" type="submit" color="teal" label="start creating post"></q-btn>

            </q-form>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue"
import Logo from "@/components/UIs/Logo.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.ts"
import { storeToRefs } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { v4 as uuidv4 } from 'uuid';
import { useBlogStore } from "@/stores/blog";
const router = useRouter()

const { loginUserEmail } = storeToRefs(useUserStore())

const blogUsername: Ref<string> = ref("")
const profilePhoto: Ref<any> = ref(null);
const blogUserBio: Ref<string> = ref("")

const { createABlogUser }: any = useBlogStore()


function resetBlogRegistrationForm() {
    blogUserBio.value = ""
    profilePhoto.value = null
    blogUsername.value = ""
}

function newBlogUserRegistrationHandler() {

    const newBlogUser: any = {
        name: blogUsername.value,
        blogHandle: blogUsername.value.split(" ").join(".") + ".khorjei.dev",
        email: loginUserEmail?.value,
        userBio: blogUserBio.value,
        userId: uuidv4(),

    }
    const reader = new FileReader();
    reader.readAsDataURL(profilePhoto?.value)
    reader.onload = () => {
        const base64Img = reader.result;
        newBlogUser.profilePhoto = base64Img
        console.log("New blog user: ", newBlogUser)
        createABlogUser(newBlogUser)
        resetBlogRegistrationForm()

    }

    // router.push("/blog")

}

</script>