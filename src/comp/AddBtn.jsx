import {
  Add,
  EmojiEmotions,
  Image,
  PersonAdd,
  Send,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
  TextField,
} from "@mui/material";
import { borderRadius, Stack } from "@mui/system";
import React, { useState } from "react";

const SModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const AddBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: "30px",
          left: { sm: "70px", xs: "50%" },
          transform: { xs: "translatex(-50%)", sm: "translatex(0%)" },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={(e) => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>
      <SModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          bgcolor="background.default"
          color="text.primary"
          sx={{
            width: { xs: "80vw", sm: "50vw" },
            height: "50vh",
            borderRadius: "1rem",
            padding: 3,
          }}
        >
          <Typography variant="h6" textAlign="center" mb={2} color="gray">
            Add Post
          </Typography>
          <UserBox>
            <Avatar src="https://avatars.githubusercontent.com/u/64457787?v=4"></Avatar>
            <Typography variant="body1">Aadil Mugal</Typography>
          </UserBox>
          <TextField
            sx={{ marginTop: "20px", width: "100%" }}
            label="Write your post"
            multiline
            rows={4}
            variant="standard"
          />
          <Stack
            direction="row"
            gap={3}
            mt={2}
            mb={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
            <Send sx={{ marginLeft: "auto" }} />
          </Stack>
        </Box>
      </SModal>
    </Box>
  );
};

export default AddBtn;
