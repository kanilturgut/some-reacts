import jsonPlaceHolder from "../api/jsonplaceholder";

export const fetchPosts = async () => {
  const response = await jsonPlaceHolder.get("/posts");

  return {
    type: "FETCH_POSTS",
    paylod: response,
  };
};
