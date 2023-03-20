<template>
    <div class="w-full   h-full min-h-screen  max-h-full bg-white p-4 ">


        <!-- <div class="w-[400px] z-100 m-auto bg-teal-400">
            <h3 v-if="loading">loading....</h3>
            <h4 v-else-if="error">{{ error }} </h4>
            <h2 v-else>{{ result }}</h2>


        </div> -->


        <div class="bg-white">
            <h3
                class="text-center text-[35px] text-transparent bg-gradient-to-r from-[#42d392]  to-[#647eff] bg-clip-text font-bold ">
                Hey
                <span class="text-zinc-600">

                    {{ BlogUserName }},
                </span>

                welcome to your dashboard
            </h3>
        </div>


        <DashboardSidebar @select-user-setting="adminSettingSelectionHandler" />
        <div
            class="fixed z-30 right-[3rem] bottom-[2rem] top-[5rem] overflow-y-scroll p-3 w-[900px] max-w-full bg-gradient-to-tl from-[#e3ed64] to-[#8ecbe7]  opacity-80 rounded-lg min-h-screen max-h-[700px]  ">

            <blog-management @show-editor="isEditorShown = true" v-if="selectedAdminSetting === 'blog'">

                <template #blogDataTable>
                    <CommonBlogDataTable @delete-post="deletePostHandler" @show-update-editor="updateEditorHandler"
                        v-for="{ title, createdAt, brief, postId, updatedAt } in userDashboardBlogs" :key="postId"
                        :title="title" :brief="brief" :createdAt="updatedAt || createdAt || ''" :postId="postId" />

                    <div class="w-full">

                        <BlogEditor :postId="toUpdatePostId" :all-user-blogs="userDashboardBlogs" editorMode="edit"
                            v-if="isUpdateEditorShown" @close-editor-dialog="isUpdateEditorShown = false" />
                    </div>


                </template>

            </blog-management>
            <comment-management :comments="userCommentsData" v-if="selectedAdminSetting === 'comment'"></comment-management>

            <profile-management :name="userProfileData?.name" :profilePhoto="userProfileData?.profilePhoto"
                :userBio="userProfileData?.userBio" v-if="selectedAdminSetting === 'profile'"></profile-management>

        </div>
        <BlogEditor editorMode="create" v-if="isEditorShown" @close-editor-dialog="isEditorShown = false" />




    </div>
</template>
<script setup lang="ts">
import BlogEditor from '@/components/editor/BlogEditor.vue';
import BlogManagement from '@/components/userDashboard/BlogManagement.vue';
import CommonBlogDataTable from '@/components/userDashboard/CommonBlogDataTable.vue';
import ProfileManagement from '@/components/userDashboard/ProfileManagement.vue';
import CommentManagement from '@/components/userDashboard/CommentManagement.vue';
import DashboardSidebar from '@/components/userDashboard/DashboardSidebar.vue';

import { useBlogStore } from '@/stores/blog';

import { ref, type Ref, watch, computed } from "vue"
import { useQuery } from "@vue/apollo-composable"
import { GET_USER_DASHBOARD_DATA } from '@/graphql/BlogQueries';


const isEditorShown: Ref<Boolean> = ref(false)
const isUpdateEditorShown: Ref<Boolean> = ref(false)
const toUpdatePostId: Ref<any> = ref('')

const { deleteABlogPost }: any = useBlogStore();

const BlogUserName: Ref<String> = ref(localStorage.getItem('u_nm') || 'User')


const selectedAdminSetting: Ref<string> = ref("blog")
function adminSettingSelectionHandler(setting: string) {
    selectedAdminSetting.value = setting
}

const { result, loading, error }: any = useQuery(GET_USER_DASHBOARD_DATA, {
    "userId": localStorage.getItem("u_id")
})
watch(result, (val) => {
    console.log("User dashboard data: ", val)
})
const userDashboardBlogs: any = computed(() => {

    return result.value?.userBlogManagementData
})

function updateEditorHandler(postId: string): void {
    console.log('update editor handler', postId)
    toUpdatePostId.value = postId
    isUpdateEditorShown.value = true;
}


function deletePostHandler(postId: string): void {
    console.log("Deleting post id:", postId)
    deleteABlogPost(postId)
}

const userProfileData: any = computed(() => {

    return {

        name: result.value?.userProfileSettingData?.name,
        userBio: result.value?.userProfileSettingData?.userBio,
        profilePhoto: result.value?.userProfileSettingData?.profilePhoto,

    }
})
const userCommentsData: any = computed(() => {
    return result.value?.userComments
})

</script>