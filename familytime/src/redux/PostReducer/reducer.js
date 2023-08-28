import {
  POSTHEADERROR,
  POSTHEADLOADING,
  POSTHEADSUCCESS,
  GETHEADSUCCESS,
} from "./actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTHEADLOADING: {
      return { ...state, isLoading: true };
    }
    case POSTHEADSUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        posts: [...state.posts, payload],
      };
    }
    case POSTHEADERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case GETHEADSUCCESS: {
      return { ...state, isLoading: false, isError: true, posts: payload };
    }
    default: {
      return state;
    }
  }
};
