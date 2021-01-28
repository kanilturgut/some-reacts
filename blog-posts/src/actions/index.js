import jsonPlaceHolder from "../api/jsonplaceholder";

// async action creation with middleware
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", paylod: response });
};
