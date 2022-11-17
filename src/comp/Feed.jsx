import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

let p1 =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
let p2 =
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
let p3 =
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80";
let p4 =
  "https://images.unsplash.com/photo-1613768547316-1bc9392ecc02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
let p5 =
  "https://images.unsplash.com/photo-1534790844238-52687519e5f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post img={p1} />
      <Post img={p2} />
      <Post img={p5} />
      <Post img={p4} />
      <Post img={p3} />
    </Box>
  );
};

export default Feed;
