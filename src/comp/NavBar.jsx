import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Checkbox,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import {
  Camera,
  DarkMode,
  LightMode,
  Mail,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const MyToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: ".8rem",
  paddingRight: ".6rem",
  paddingTop: ".2rem",
  paddingBottom: ".2rem",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "40%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: ".6rem",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: "1",
  display: "block",
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    gap: "30px",
  },
}));

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="primary">
      <MyToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, fontFamily: "Lobster" }}
        >
          AADIL
        </Typography>
        <Camera sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" />
        </Search>
        <UserBox>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "15px" }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={6} color="error">
              <Notifications />
            </Badge>
          </Box>
          <IconButton
            aria-label="add to favorites"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Checkbox
              onChange={(e) =>
                props.setMode(props.mode === "dark" ? "light" : "dark")
              }
              icon={<LightMode sx={{ color: "white" }} />}
              checkedIcon={<DarkMode sx={{ color: "white" }} />}
            />
          </IconButton>
          <Avatar
            alt="Aadil Mugal"
            sx={{ width: "30px", height: "30px" }}
            src="https://avatars.githubusercontent.com/u/64457787?v=4"
            onClick={(e) => setOpen(true)}
          />
        </UserBox>
        <Menu
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={(e) => setOpen(false)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
          <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
          <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
        </Menu>
      </MyToolbar>
    </AppBar>
  );
};

export default NavBar;
