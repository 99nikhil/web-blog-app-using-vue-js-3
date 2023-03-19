
<template>
    <div class="bg-gradient-to-tr from-[#e02713] via-[#c79e93] to-[#099995] w-full min-h-screen max-h-full m-0 p-4">



        <form @submit.prevent="userLoginHandler" v-if="isUserWantsToLogin"
            class=" bg-white shadow-lg rounded px-8 pt-6 pb-8  w-1/3 m-auto mt-12 ">
            <!-- Login -->

            <div>
                <h3 class="text-xl font-bold text-fuchsia-900 mb-4 m-0 text-center">
                    Login
                </h3>


                <div class="mb-10 ">
                    <h3 class="block text-gray-700 text-sm font-bold mb-2">Email</h3>
                    <q-input v-model="loginEmail" clearable clear-icon="close" type="email" lazy-rules :rules="[
                        val => val?.includes('@') || (val.length === 0 || 'Please include @ in your email')

                    ]" outlined></q-input>
                    <h3 class="block text-gray-700 text-sm font-bold mb-2">Password</h3>
                    <q-input v-model="loginPassword" type="password" clearable clear-icon="close" lazy-rules :rules="[
                        val => val?.length >= 6 || (val.length === 0 || 'Please enter atleast 6 characters long')
                    ]" outlined></q-input>
                </div>

                <div class="mt-2 flex items-center justify-between gap-4 ">
                    <q-btn color="purple" type="submit" label="Login In"></q-btn>
                    <q-btn color="orange" @click="isUserWantsToLogin = false" label="Go to Sign up page"></q-btn>
                </div>
            </div>


        </form>

        <q-form @submit.prevent="userSignUpHandler" v-if="!isUserWantsToLogin"
            class=" bg-white shadow-lg rounded px-8 pt-6 pb-8  w-1/3 m-auto mt-12">
            <!-- Login -->

            <div>
                <h3 class="text-xl font-bold text-fuchsia-900 mb-4 m-0 text-center">
                    Create an account
                </h3>

                <div class="my-4">
                    <h3 class="block text-gray-700 text-sm font-bold mb-2">Email</h3>
                    <q-input v-model="signupEmail" clearable clear-icon="close" type="email" lazy-rules :rules="[
                        val => val?.includes('@') || (val.length === 0 || 'Please include @ in your email')

                    ]" outlined></q-input>
                    <h3 class="block text-gray-700 text-sm font-bold mb-2">Password</h3>
                    <q-input v-model="signupPassword" clearable clear-icon="close" type="password" outlined lazy-rules
                        :rules="[
                            val => val?.length >= 6 || (val.length === 0 || 'Please enter atleast 6 characters long')
                        ]"></q-input>
                    <h3 class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</h3>
                    <q-input v-model="confirmSignupPassword" clearable clear-icon="close" lazy-rules :rules="[
                        val => val?.length >= 6 || (val.length === 0 || 'Please enter atleast 6 characters long'),
                        val => val === signupPassword || (val.length === 0 || 'Password doesn\'t match')
                    ]" type="password" outlined></q-input>
                </div>



                <div class="flex items-center justify-between">

                    <q-btn label="SignUp" type="submit" color="purple"></q-btn>
                    <q-btn color="teal" @click="isUserWantsToLogin = true" label="Go to Login Page"> </q-btn>
                </div>
            </div>


        </q-form>


    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user.ts'
import { ref, watch, inject } from "vue"
import { useQuasar } from 'quasar';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useQuery } from "@vue/apollo-composable"
import { CHECK_BLOG_USER_THERE } from "../graphql/BlogQueries.ts"

const loginEmail = ref("");
const loginPassword = ref("")


const isUserWantsToLogin = ref(true)
const { userLogin, userSignUp } = useUserStore();
const { userSignUpErrorLog, loginUserEmail } = storeToRefs(useUserStore())


const signupEmail = ref("")
const signupPassword = ref("")
const confirmSignupPassword = ref("")

const router = useRouter()


watch(userSignUpErrorLog, (val) => {
    if (val === 'success') {

        router.push("/auth/user/sendConfirmationEmail")
    } else if (val) {
        alertSignUpError(val)
    }


})


function resetLoginForm() {
    loginEmail.value = ""
    loginPassword.value = ""
}


function resetSignUpForm() {
    signupEmail.value = "";
    signupPassword.value = "";
    confirmSignupPassword.value = "";
}
const $q = useQuasar()

function alertLoginError() {
    $q.notify({
        type: 'negative',
        message: 'Incorrect Email and Password'
    })
}

function alertSignUpError(errLog: string) {
    $q.notify({
        type: 'negative',
        message: errLog || 'There is a problem signing up.Pls try again'
    })
}

async function userLoginHandler() {
    console.log("This is auth view model")

    const status = await userLogin(loginEmail.value, loginPassword.value)
    resetLoginForm()
    if (status === "loginError") {
        alertLoginError()
    } else if (status === "loginSuccess") {
        const { result } = useQuery(CHECK_BLOG_USER_THERE, {
            "loginEmail": loginUserEmail.value
        })
        console.log("login success : ", loginUserEmail.value)
        watch(result, (val) => {
            console.log("blog registration query", val)
            if (val?.blogUser?.userId) {
                localStorage.setItem("u_id", val.blogUser.userId)
                localStorage.setItem("u_obj_id", val.blogUser._id)
                localStorage.setItem('u_nm', val?.blogUser?.name)
                router.push("/explore")
            } else {
                router.push("/blog/user-registration")
            }
        })
    }

}
function userSignUpHandler() {
    console.log("user Signing up");
    userSignUp(signupEmail.value, signupPassword.value)
    resetSignUpForm()
}




</script>