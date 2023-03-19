<template>
    <aside
        class="   bg-white rounded-lg shadow-md z-40 w-60 h-full   transition-transform -translate-x-full sm:translate-x-0">


        <div class="  px-4 py-4 overflow-y-auto bg-dashboard    ">
            <ul class="space-y-2">



                <router-link to="/blog-admin">


                    <svg class="w-7 h-8 inline" viewBox="0 0 512 512">
                        <path
                            d="M464 32H144c-26.5 0-48 21.53-48 48v336c0 17.66-14.36 32-32 32s-32-14.34-32-32V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 35.28 28.7 64 64 64h368c44.11 0 80-35.88 80-80V80c0-26.47-21.5-48-48-48zm16 368c0 26.47-21.53 48-48 48H119.4c5.5-9.4 8.6-20.3 8.6-32V80c0-8.81 7.2-16 16-16h320c8.8 0 16 7.19 16 16v320zm-208-96h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-160 64h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zM416 96H192c-17.7 0-32 14.3-32 32v96c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm0 128H192v-96h224v96z">
                        </path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap hover:text-emerald-700">
                        <h2 class="inline-block cursor-pointer">My Dashboard</h2>
                    </span>


                </router-link>
                <li>
                    <router-link to="/explore">
                        <svg class="w-7 h-8 inline-block " viewBox="0 0 512 512">
                            <path
                                d="M232 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm116.6-133.1c25-8.3 48.8 15.5 40.5 40.5l-48.9 146.5c-4.7 14.3-16 25.6-30.3 30.3l-146.5 48.9c-25 8.3-48.8-15.5-40.5-40.5l48.9-146.5c4.7-14.3 16-25.6 30.3-30.3l146.5-48.9zm10.1 30.4-146.5 48.8c-4.7 1.6-8.5 5.4-10.1 10.1l-48.8 146.5 146.5-48.8c4.7-1.6 8.5-5.4 10.1-10.1l48.8-146.5zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z">
                            </path>
                        </svg>

                        <span class="ml-2 hover:text-emerald-700">
                            Explore
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>

    </aside>
</template>
<script setup lang="ts"></script>