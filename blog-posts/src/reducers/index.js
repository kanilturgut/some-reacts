import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

/**
 * Rules of Reducers
 *
 * Must return any valur beside 'undefined'
 *
 * Produces 'state', or data to be used inside of your app using
 * only previous state and the action
 *
 * Must not return reach 'out of itself' to decide what value to
 * return (reducers are pure)
 *
 * Must no mutate its input 'state' argument
 *
 */
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
