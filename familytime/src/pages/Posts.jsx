import React, { useEffect } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { getHead, postHead } from "../redux/PostReducer/action";

import { useDispatch, useSelector } from "react-redux";

import { useCookies } from "react-cookie";

export const Posts = () => {
  const [generateCode, setGenerateCode] = useState(null);
  const [cookies, setCookie] = useCookies(["generatedCode"]);

  const [displayForm, setDisplayForm] = useState(false);

  const [uploadState, setUpload] = useState("");
  const [captionState, setCaption] = useState("");

  const dispatch = useDispatch();

  const posts = useSelector((store) => store.postReducer.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(getHead());
  }, []);

  const handleCode = async () => {
    let randomNum = Math.floor(Math.random() * 90000) + 10000;
    setGenerateCode(randomNum);

    setCookie("generatedCode", randomNum, { path: "/" });
  };

  console.log(generateCode);

  const toggleButton = () => {
    setDisplayForm(!displayForm);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const postData = {
      upload: uploadState,
      caption: captionState,
    };

    try {
      await dispatch(postHead(postData));
      await dispatch(getHead());
    } catch (error) {
      console.log(error.message);
    }

    setUpload("");
    setCaption("");
  };

  return (
    <div>
      Posts
      <Box border="1px solid red" width="60%" margin="auto">
        <Box>
          <Text>{generateCode}</Text>
          <Button onClick={() => handleCode()}>Generate Code</Button>
        </Box>

        <Button onClick={() => toggleButton()} borderRadius="50%" mt="20px">
          +
        </Button>
        {displayForm && (
          <Flex visibility={displayForm} border="1px solid red">
            <form
              style={{
                display: "flex",
                border: "1px solid blue",
                flexDirection: "column",
                width: "50%",
                margin: "auto",
                gap: "10px",
              }}
              onSubmit={handlePost}
            >
              <input
                type="text"
                placeholder="Upload Image"
                value={uploadState}
                onChange={(e) => setUpload(e.target.value)}
              />
              <input
                type="text"
                placeholder="Write Something..."
                value={captionState}
                onChange={(e) => setCaption(e.target.value)}
              />
              <input type="submit" />
            </form>
          </Flex>
        )}
      </Box>
      <Box>
        {posts.length > 0 &&
          posts.map((item) => (
            <Box key={item._id}>
              <p>{item.upload}</p>
              <p>{item.caption}</p>
            </Box>
          ))}
      </Box>
    </div>
  );
};
