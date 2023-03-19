<template>
    <q-card class="mb-[100px]">
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary " indicator-color="primary" align="justify"
            narrow-indicator>
            <!-- <q-tab name="mails" label="Mails" /> -->
            <q-tab name="trending" label="Trending" />
            <q-tab name="latest blogs" label="Latest Blogs" />
            <q-tab name="All categories" label="All Blogs" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>


            <q-tab-panel name="trending">
                <div class="text-h6">trending</div>
                <base-category-card></base-category-card>
                <base-category-card></base-category-card>
                <base-category-card></base-category-card>

            </q-tab-panel>


            <q-tab-panel name="latest blogs">
                <div class="text-h6">latest blogs</div>
                blogs
            </q-tab-panel>

            <q-tab-panel name="All categories">
                <div class="text-h6">All categories</div>
                select your category
            </q-tab-panel>

        </q-tab-panels>
    </q-card>
</template>
<script setup lang="ts">
import { ref } from "vue"
const tab = ref(null)



</script>