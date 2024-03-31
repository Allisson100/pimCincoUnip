import { Outlet, useLocation } from "react-router-dom";
import Logo from "../Logo";
import { Box } from "@mui/material";
import Menu from "../Menu";

const DefaultPage = () => {
  const { pathname } = useLocation();

  return (
    <Box
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
    >
      {pathname === "/" && <Logo />}
      {pathname !== "/" && <Menu />}
      <Outlet />
    </Box>
  );
};

export default DefaultPage;
