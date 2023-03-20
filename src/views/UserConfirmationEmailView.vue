<template>
    <div class="w-full  h-full min-h-screen bg-gradient-to-tl from-[#D87C1E] via-[#86A8E7] to-[#5FFBF1] p-4 ">
        <div
            class=" flex flex-col items-center w-[720px] bg-white m-auto min-h-[300px] h-full mt-16 p-1 rounded-lg shadow-xl">
            <h3 class=" mt-5 text-3xl font-bold text-cyan-800">Confirmation Email</h3>
            <h4 class="text-center  m-3 text-lg text-teal-800 ">We have send you the confirmation link to your e-mail.Please
                check your
                email and
                follow further instructions
            </h4>
            <q-btn class="mt-5" @click="resendConfirmationEmail" label="resend confirmation link" color="blue"></q-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const { resendConfirmationEmail } = useUserStore()


</script>