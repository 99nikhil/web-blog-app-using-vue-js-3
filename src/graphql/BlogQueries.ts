import gql from "graphql-tag";

const BLOG_POSTS_QUERY = gql`
  query blogs {
    blogPosts(limit: 20) {
      postId
      author {
        name
        blogHandle
        profilePhoto
      }
      brief
      content
      coverImage
      createdAt
      postComments {
        text
      }
      tags
      title
      readingTime
      createdAt
      updatedAt
    }
  }
`;
const ADD_ONE_BLOG_USER_COMMENT = gql`
  mutation ($commentData: BlogCommentInsertInput!) {
    insertOneBlogComment(data: $commentData) {
      author {
        name
      }
      commentId
      createdAt
      post {
        title
      }
      text
    }
  }
`;
const BLOG_POSTS_BY_AUTHOR_ID = gql`
  query ($authorId: String) {
    blogPosts(query: { author: { userId: $authorId } }) {
      title
      brief
      coverImage
      postId
      author {
        profilePhoto
        name
      }
    }
  }
`;
const GET_USER_DASHBOARD_DATA = gql`
  query ($userId: String) {
    userBlogManagementData: blogPosts(query: { author: { userId: $userId } }) {
      title
      brief
      tags
      postId
      content
      readingTime
      coverImage
      createdAt
      updatedAt
    }
    userProfileSettingData: blogUser(query: { userId: $userId }) {
      name
      userBio
      profilePhoto
      userId
    }
    userComments: blogComments(query: { author: { userId: $userId } }) {
      post {
        title
        brief
      }
      text
      commentId
    }
  }
`;

const CHECK_BLOG_USER_THERE = gql`
  query ($loginEmail: String) {
    blogUser(query: { email: $loginEmail }) {
      userId
      _id
      name
    }
  }
`;

const UPDATE_A_BLOG_USER = gql`
  mutation ($userId: String, $userProfileData: BlogUserUpdateInput!) {
    updateOneBlogUser(query: { userId: $userId }, set: $userProfileData) {
      name
      profilePhoto
      userBio
    }
  }
`;

const DELETE_ONE_BLOG_POST = gql`
  mutation ($postId: String) {
    deletePost: deleteOneBlogPost(query: { postId: $postId }) {
      brief
    }
    deletePostComment: deleteOneBlogComment(
      query: { post: { postId: $postId } }
    ) {
      text
    }
  }
`;

const GET_A_BLOG_POST_QUERY = gql`
  query getASinglePost($id: String) {
    blogPost: blogPost(query: { postId: $id }) {
      _id
      author {
        name
        blogHandle
        profilePhoto
        userBio
        userId
      }
      title
      brief
      content
      coverImage
      postComments {
        text
        post {
          postId
        }
        author {
          name
          userId
          profilePhoto
        }
      }
      createdAt
      updatedAt
      readingTime
      tags
    }
    postComments: blogComments(query: { post: { postId: $id } }) {
      ...comment
    }
  }

  fragment comment on BlogComment {
    text
    post {
      postId
    }
    author {
      name
      userId
      profilePhoto
    }
  }
`;

const INSERT_BLOG_POST_QUERY = gql`
  mutation ($blogPostData: BlogPostInsertInput!) {
    insertOneBlogPost(data: $blogPostData) {
      postId
      title
      brief
      content
      coverImage
      createdAt
      tags
      author {
        name
      }
    }
  }
`;

const REPLACE_ONE_BLOG_POST = gql`
  mutation ($postId: String, $updateBlogData: BlogPostInsertInput!) {
    replaceOneBlogPost(query: { postId: $postId }, data: $updateBlogData) {
      title
      brief
      content
      coverImage
      updatedAt
      tags
      postId
      createdAt
      author {
        name
      }
    }
  }
`;

const UPDATE_ONE_BLOG_COMMENT = gql`
  mutation ($commentText: String, $commentId: String) {
    updateOneBlogComment(
      query: { commentId: $commentId }
      set: { text: $commentText }
    ) {
      text
    }
  }
`;

const DELETE_A_BLOG_COMMENT = gql`
  mutation ($commentId: String) {
    deleteOneBlogComment(query: { commentId: $commentId }) {
      text
    }
  }
`;

const CREATE_A_NEW_BLOG_USER = gql`
  mutation ($blogUserData: BlogUserInsertInput!) {
    insertOneBlogUser(data: $blogUserData) {
      blogHandle
      email
      name
      profilePhoto
      userBio
      userId
    }
  }
`;

export {
  BLOG_POSTS_QUERY,
  INSERT_BLOG_POST_QUERY,
  GET_A_BLOG_POST_QUERY,
  CREATE_A_NEW_BLOG_USER,
  GET_USER_DASHBOARD_DATA,
  CHECK_BLOG_USER_THERE,
  ADD_ONE_BLOG_USER_COMMENT,
  REPLACE_ONE_BLOG_POST,
  UPDATE_ONE_BLOG_COMMENT,
  DELETE_A_BLOG_COMMENT,
  DELETE_ONE_BLOG_POST,
  UPDATE_A_BLOG_USER,
  BLOG_POSTS_BY_AUTHOR_ID,
};
