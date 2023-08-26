import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export const Posts = () => {
  const [generateCode, setGenerateCode] = useState(null)

  const handleCode = () => {

    let randomNum = Math.floor(Math.random()*90000) + 10000
    setGenerateCode(randomNum)


  }
 

  return (
    <div>
      Posts
      <Box>
        <Text>{generateCode}</Text>
        <Button onClick={() => handleCode()} >Generate Code</Button>
      </Box>
    </div>
  );
};
