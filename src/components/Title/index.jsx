import { Typography, useTheme } from "@mui/material";

const Title = ({ children }) => {
  const theme = useTheme();

  return (
    <Typography
      component="h2"
      textAlign="center"
      color={theme.dark.colors.defaultMain}
      fontSize="2rem"
    >
      {children}
    </Typography>
  );
};

export default Title;
