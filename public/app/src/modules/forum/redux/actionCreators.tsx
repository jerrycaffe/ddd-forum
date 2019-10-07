
import * as actions from "./actions";
import { Post } from "../models/Post";


export type ForumAction = { [key: string]: actions.ForumActionType | any };

function submittingPost (): ForumAction {
  return {
    type: actions.SUBMITTING_POST
  };
}

function submittingPostSuccess (): ForumAction {
  return {
    type: actions.SUBMITTING_POST_SUCCESS
  };
}

function submittingPostFailure (error: string): ForumAction & { error: string } {
  return {
    type: actions.SUBMITTING_POST_FAILURE,
    error
  };
}

function getRecentPosts (): ForumAction {
  return {
    type: actions.GETTING_RECENT_POSTS
  };
}

function getRecentPostsSuccess (posts: Post[]): ForumAction {
  return {
    type: actions.GETTING_RECENT_POSTS_SUCCESS,
    posts
  };
}

function getRecentPostsFailure (error: string): ForumAction & { error: string } {
  return {
    type: actions.GETTING_RECENT_POSTS_FAILURE,
    error
  };
}

export {
  submittingPost,
  submittingPostSuccess,
  submittingPostFailure,

  getRecentPosts,
  getRecentPostsSuccess,
  getRecentPostsFailure
}