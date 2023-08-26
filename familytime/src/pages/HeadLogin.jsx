import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headLogin } from "../redux/Authentication/action";
import { Box } from "@chakra-ui/react";

export const HeadLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginStatus = useSelector((store) => store.authReducer);
  console.log(loginStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let loginData = { email, password };
    dispatch(headLogin(loginData));

    console.log(loginStatus.isAuth);
    if (loginStatus.isAuth) {
      navigate("/posts");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Box>Head Login</Box>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};
