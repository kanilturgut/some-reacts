import _ from "lodash";
import jsonPlaceHolder from "../api/jsonplaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

// async action creation with middleware
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*

export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});

*/
