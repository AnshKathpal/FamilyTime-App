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

import axios from "axios";

let baseurl = "http://localhost:8080";

export const headRegister = (obj) => (dispatch) => {
  axios
    .post(`${baseurl}/head/headregister`, obj)
    .then((res) => {
      dispatch({ type: HEADREGISTERSUCCESS });
      console.log(res);
      alert("User Registerd");
    })
    .catch((err) => {
      console.log(err.message);
      alert("User Already Exist!");
    });
};

export const memberRegister = (obj) => (dispatch) => {
  axios
    .post(`${baseurl}/member/memberregister`, obj,{
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true, // This allows sending cookies
      }
    })
    .then((res) => {
      dispatch({ type: MEMBERREGISTERSUCCESS });
      console.log(res);
      alert("User Registerd");
    })
    .catch((err) => {
      console.log(err.message);
      alert("User Already Exist!");
    });
};

export const headLogin = (obj) => (dispatch) => {
  dispatch({ type: HEADLOGINLOADING });
  axios
    .post(`${baseurl}/head/headlogin`, obj)
    .then((res) => {
      dispatch({ type: HEADLOGINSUCCESS, payload: res.data.token });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: HEADLOGINERROR });
      console.log(err.message);
    });
};

export const memberLogin = (obj) => (dispatch) => {
  dispatch({ type: MEMBERLOGINLOADING });
  axios
    .post(`${baseurl}/member/memberlogin`, obj)
    .then((res) => {
      dispatch({ type: MEMBERLOGINSUCCESS, payload: res.data.token });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: MEMBERLOGINERROR });
      console.log(err.message);
    });
};
