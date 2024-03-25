import { Box, Typography, useTheme } from "@mui/material";
import { IoSchool } from "react-icons/io5";

const Logo = () => {
  const theme = useTheme();

  return (
    <Box
      component="h1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <IoSchool size={100} color={theme.dark.colors.defaultMain} />
      <Typography
        component="p"
        textAlign="center"
        sx={(theme) => ({
          color: theme.dark.colors.defaultMain,
          fontSize: "2rem",
        })}
      >
        Colégio Vencer Sempre
      </Typography>
    </Box>
  );
};

export default Logo;
