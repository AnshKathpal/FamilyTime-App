import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HeadRegistration } from "./HeadRegistration";
import { MemberRegistration } from "./MemberRegistration";
import { useState } from "react";

export const Register = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box>
      <Text>FamilyTime</Text>
      <Box>
        <Button onClick={() => setToggle(true)}>Register As Head</Button>
        <Button onClick={() => setToggle(false)}>Register As Member</Button>
      </Box>
      {toggle ? <HeadRegistration /> : <MemberRegistration />}
      {toggle ? "Already a Head ? " : "Already a Member? "}
      {toggle ? (
        <Link to="/headlogin">Login</Link>
      ) : (
        <Link to="/memberlogin">Login</Link>
      )}{" "}
      here
    </Box>
  );
};
