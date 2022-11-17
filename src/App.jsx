import React, { useState } from "react";
import SideBar from "./comp/SideBar";
import Feed from "./comp/Feed";
import RightBar from "./comp/RightBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./comp/NavBar";
import AddBtn from "./comp/AddBtn";

const App = () => {
  const [mode, setMode] = useState("light");

  const dTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={dTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <NavBar mode={mode} setMode={setMode} />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ gap: { xs: 0, sm: 4 } }}
        >
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddBtn />
      </Box>
    </ThemeProvider>
  );
};

export default App;
