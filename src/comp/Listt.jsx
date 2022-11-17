import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Listt = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="A" src="https://mui.com/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Adil Connors
            </Typography>
            {" — quo non corporis nemo"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Listt;
