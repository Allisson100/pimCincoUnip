import { Box, Typography, useTheme } from "@mui/material";
import { IoSchool } from "react-icons/io5";
import { Link } from "react-router-dom";

const Logo = () => {
  const theme = useTheme();

  return (
    <Link to="/" style={{ textDecoration: "none", marginBottom: "4rem" }}>
      <Box
        component="h1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <IoSchool size={100} color="black" />
        <Typography
          component="p"
          textAlign="center"
          sx={{
            color: "black",
            fontSize: "2rem",
          }}
        >
          Colégio Vencer Sempre
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
