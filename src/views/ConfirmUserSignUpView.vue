<template>
    <div class="w-full  h-full min-h-screen bg-gradient-to-tl from-[#D87C1E] via-[#86A8E7] to-[#5FFBF1] p-4 ">

        <div class="w-[700px] bg-white m-auto min-h-[300px] h-full mt-16 p-2 rounded-lg shadow-xl">

            <div v-if="!isUserSignUpConfirmed && !isThereUserConfirmError" class="w-[20px] m-auto mt-20 ">
                <q-spinner size="3rem"></q-spinner>
            </div>

            <div v-else-if="isThereUserConfirmError" class="p-3  w-[500px] m-auto text-center mt-8">

                <span class="text-lg text-red-600">Your confirm link has expired.Please resend the confirmation link.</span>
            </div>


            <div v-else>
                <logo></logo>
                <h3 class="text-[22px] text text-center mt-4 mx-2 text-emerald-900 font-medium">


                    Your email has been confirmed.Please login again to get started.

                </h3>
                <div class="text-center">

                    <router-link class="text-blue-900   font-medium underline text-lg" to="/auth/login">Go to Login
                        page.</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { ref, watch, onMounted } from "vue"
import { storeToRefs } from 'pinia';
import Logo from '@/components/UIs/Logo.vue';
const { isUserSignUpConfirmed } = storeToRefs(useUserStore())


const { isThereUserConfirmError } = storeToRefs(useUserStore())
const { confirmUserSignUp } = useUserStore();
const route = useRoute();

// watch(isThereUserConfirmError, (value) => {
//     isThereUserConfirmError.value = value
// })

console.log("Route params", route.query)
onMounted(() => {
    console.log("calling confirm user sign up")
    confirmUserSignUp(route.query.token, route.query.tokenId)
})

</script>