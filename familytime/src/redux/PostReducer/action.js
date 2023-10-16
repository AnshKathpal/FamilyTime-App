import axios from "axios";
import {
  POSTHEADERROR,
  POSTHEADLOADING,
  POSTHEADSUCCESS,
  GETHEADSUCCESS,
} from "./actionTypes";

let baseurl = "http://localhost:8080";

export const postHead = (obj) => (dispatch) => {
  dispatch({ type: POSTHEADLOADING });
  axios
    .post(`${baseurl}/head/addposts`, obj)
    .then((res) => {
      dispatch({ type: POSTHEADSUCCESS });
      console.log(res);
      alert("Post added");
    })
    .catch((err) => {
      dispatch({ type: POSTHEADERROR });
      console.log(err);
    });
};

export const getHead = () => (dispatch) => {
  dispatch({ type: POSTHEADLOADING });
  axios
    .get(`${baseurl}/head/headposts`)
    .then((res) => {
      dispatch({ type: GETHEADSUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: POSTHEADERROR });
      console.log(err);
    });
};
