import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headRegister, memberRegister } from "../redux/Authentication/action";
import { Box, Flex } from "@chakra-ui/react";

export const MemberRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [sharecode, setSharecode] = useState("");

  const registerStatus = useSelector((store) => store.authReducer);
  console.log(registerStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerdata = { email, username, password, fullname, sharecode };
    dispatch(memberRegister(registerdata));
  };

  return (
    <div>
      Registration Members
      {/* <Flex border = "1px solid red" > */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid red",
          width: "40%",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          id="register-email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="string"
          id="register-fullname"
          value={fullname}
          placeholder="Enter Fullname"
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="string"
          id="register-username"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="register-password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="string"
          value={sharecode}
          placeholder="Enter Shared Code"
          onChange={(e) => setSharecode(e.target.value)}
        />

        <input type="submit" />
      </form>
      {/* </Flex> */}
    </div>
  );
};
