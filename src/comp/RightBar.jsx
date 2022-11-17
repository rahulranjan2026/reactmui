import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import Listt from "./Listt";

let itemData = [
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format",
  },
];

const RightBar = () => {
  return (
    <Box
      position="relative"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Box position="fixed">
        <Typography
          variant="button"
          component="div"
          fontWeight="light"
          sx={{ marginBottom: "1rem", marginTop: "1.5rem" }}
        >
          Online friends
        </Typography>
        <AvatarGroup max={7} sx={{ justifyContent: "start" }}>
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </AvatarGroup>
        <Typography
          variant="button"
          component="div"
          fontWeight="light"
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 300 }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography
          variant="button"
          component="div"
          fontWeight="light"
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <Listt />
          <Listt />
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
