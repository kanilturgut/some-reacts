import jsonPlaceHolder from "../api/jsonplaceholder";

// async action creation with middleware
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
