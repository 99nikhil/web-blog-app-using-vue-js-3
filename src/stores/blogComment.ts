import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import {
  ADD_ONE_BLOG_USER_COMMENT,
  UPDATE_ONE_BLOG_COMMENT,
  DELETE_A_BLOG_COMMENT,
} from "../graphql/BlogQueries";

export const useBlogCommentStore = defineStore("blogComment", () => {
  async function updateOneBlogComment(
    commentId: string,
    updateCommentText: string
  ) {
    const { mutate: updateComment, onError } = useMutation(
      UPDATE_ONE_BLOG_COMMENT,
      {
        variables: {
          commentText: updateCommentText,
          commentId: commentId,
        },
      }
    );
    updateComment();
    onError((err: any) => {
      console.log(err);
    });
  }
  async function deleteOneBlogComment(commentId: string) {
    const { mutate: deleteBlog } = useMutation(DELETE_A_BLOG_COMMENT, {
      variables: {
        commentId: commentId,
      },
    });
    deleteBlog();
  }
  async function insertOneBlogComment(userCommentData: any) {
    const { mutate: insertComment, onError } = await useMutation(
      ADD_ONE_BLOG_USER_COMMENT,
      {
        variables: {
          commentData: userCommentData,
        },
      }
    );
    onError((err) => {
      console.log("comment mutation error: ", err);
    });
    insertComment();
  }

  return {
    insertOneBlogComment,
    updateOneBlogComment,
    deleteOneBlogComment,
  };
});
