import { Box, CircularProgress } from "@mui/material";
import { memo } from "react";

const Loader = memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "30vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
});

export default Loader;
