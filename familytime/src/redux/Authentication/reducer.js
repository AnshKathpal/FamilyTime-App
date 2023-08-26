import {
  HEADREGISTERSUCCESS,
  MEMBERREGISTERSUCCESS,
  HEADLOGINLOADING,
  HEADLOGINSUCCESS,
  HEADLOGINERROR,
  MEMBERLOGINLOADING,
  MEMBERLOGINSUCCESS,
  MEMBERLOGINERROR,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: null,
  isLoading: false,
  isError: false,
  user: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "HEADREGISTERSUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    }
    case "MEMBERREGISTERSUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    }
    case "HEADLOGINLOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "HEADLOGINSUCCESS": {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    }
    case "HEADLOGINERROR" : {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    case "MEMBERLOGINLOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "MEMBERLOGINSUCCESS": {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    }
    case "MEMBERLOGINERROR" : {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    default: {
      return state;
    }
  }
};
