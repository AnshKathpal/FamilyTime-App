import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Box
      h="100vh"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Text>FamilyTime</Text>
      <Box>
        <Link to="/headregister">
          <Button>Register As Head</Button>
        </Link>
        <Link to="/memberregister">
          <Button>Register As Member</Button>
        </Link>
      </Box>
    </Box>
  );
};
