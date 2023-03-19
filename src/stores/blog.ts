import { defineStore } from "pinia";
import { ref } from "vue";

import { onMounted, watch, watchEffect } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  BLOG_POSTS_QUERY,
  INSERT_BLOG_POST_QUERY,
  REPLACE_ONE_BLOG_POST,
  CREATE_A_NEW_BLOG_USER,
  DELETE_ONE_BLOG_POST,
  UPDATE_A_BLOG_USER,
} from "../graphql/BlogQueries.ts";
// import { logErrorMessages } from "@vue/apollo-util";

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref(null);
  const currentBlog = ref(null);
  const isInitialBlogsLoading = ref(true);

  async function createABlogPost(newBlogData: any) {
    const { mutate: createPost, onError } = await useMutation(
      INSERT_BLOG_POST_QUERY,
      {
        variables: {
          blogPostData: newBlogData,
        },
      }
    );

    console.log("creating  a post ", createPost());
  }

  async function deleteABlogPost(postId: string) {
    const { mutate: deletePost } = useMutation(DELETE_ONE_BLOG_POST, {
      variables: {
        postId: postId,
      },
    });
    console.log("Deleting a blog post: ", deletePost());
  }

  async function updateABlogPost(postId: string, updatePostData: any) {
    console.log("post id in blog store", postId, updatePostData);
    const { mutate: updatePost, onError } = useMutation(REPLACE_ONE_BLOG_POST, {
      variables: {
        postId: postId,
        updateBlogData: updatePostData,
      },
    });
    console.log("Update a post:", updatePost());
    onError((err) => {
      console.log("Updating a blog error :", err);
    });
  }
  async function updateABlogUser(userId: string, userProfileData: any) {
    const { mutate: updateBlogUser } = useMutation(UPDATE_A_BLOG_USER, {
      variables: {
        userId: userId,
        userProfileData: userProfileData,
      },
    });
    console.log("updating blog user : ", updateBlogUser());
  }

  async function createABlogUser(newBlogUserData: any) {
    const { mutate: createBlogUser, onError } = await useMutation(
      CREATE_A_NEW_BLOG_USER,
      {
        variables: {
          blogUserData: newBlogUserData,
        },
      }
    );
    if (!onError) {
      localStorage.setItem("u_nm", newBlogUserData.name);
    }
    onError((err) => {
      console.log(err);
    });

    console.log("Creating a new blog user: ", createBlogUser());
  }

  async function getBlogPosts() {
    const { result, loading, error } = await useQuery(BLOG_POSTS_QUERY);

    if (!!error.value) {
      console.log("Error:", error.value);
    } else {
      blogs.value = result.value;
    }

    watch(result, (newValue) => {
      blogs.value = newValue;
      isInitialBlogsLoading.value = false;

      console.log("Querying blogs:", newValue);
    });
  }

  return {
    getBlogPosts,
    createABlogPost,
    blogs,
    isInitialBlogsLoading,
    createABlogUser,
    updateABlogPost,
    updateABlogUser,
    deleteABlogPost,
  };
});
