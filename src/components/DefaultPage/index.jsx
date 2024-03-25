import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import { Box } from "@mui/material";

const DefaultPage = () => {
  return (
    <Box
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
    >
      <Logo />
      <Outlet />
    </Box>
  );
};

export default DefaultPage;
