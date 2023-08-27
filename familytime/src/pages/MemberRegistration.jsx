import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headRegister, memberRegister } from "../redux/Authentication/action";
import { Box, Flex } from "@chakra-ui/react";

import { useCookies } from "react-cookie";

export const MemberRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [sharecode, setSharecode] = useState("");

  const [cookies] = useCookies(["generatedCode"]);



  const registerStatus = useSelector((store) => store.authReducer);
  console.log(registerStatus);
  const auth = useSelector((store) => store.authReducer.isAuth);
  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const generatedCode = cookies.generatedCode;
    console.log(generatedCode, "code")

    console.log(sharecode,"shared")

    if (sharecode != generatedCode) {
      alert("Incorrect Share Code. Please enter the correct code.");
      return;
    }

    const registerdata = {
      email,
      username,
      password,
      fullname,
      sharecode: generatedCode,
    };
    dispatch(memberRegister(registerdata));

    console.log(auth, "check");
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
          type="number"
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
