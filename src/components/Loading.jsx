import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      minHeight="95vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        color: "white",
        fontSize: "4rem",
        fontWeight: "bold",
        fontFamily: "JetBrains Mono",
      }}
    >
      Loading...
    </Box>
  );
};

export default Loading;
