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
    .post(`${baseurl}/user/headregister`, obj)
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
    .post(`${baseurl}/user/memberregister`, obj)
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
    .post(`${baseurl}/user/headlogin`, obj)
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
    .post(`${baseurl}/user/memberlogin`, obj)
    .then((res) => {
      dispatch({ type: MEMBERLOGINSUCCESS, payload: res.data.token });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: MEMBERLOGINERROR });
      console.log(err.message);
    });
};
