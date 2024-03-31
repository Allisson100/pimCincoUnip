import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import { Box } from "@mui/material";
import Menu from "../Menu";

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
      <Menu />
      <Outlet />
    </Box>
  );
};

export default DefaultPage;
