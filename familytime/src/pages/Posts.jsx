import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useCookies } from "react-cookie";

export const Posts = () => {
  const [generateCode, setGenerateCode] = useState(null)
  const [cookies, setCookie] = useCookies(['generatedCode']);

  const handleCode = async () => {

    let randomNum = Math.floor(Math.random()*90000) + 10000
    setGenerateCode(randomNum)

    setCookie('generatedCode', randomNum, { path: '/' });

  }



  console.log(generateCode);
  
 

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
