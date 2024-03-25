import { Box, Typography, useTheme } from "@mui/material";

const ButtonCard = ({ children, icon }) => {
  const theme = useTheme();

  return (
    <Box
      width={200}
      height={200}
      borderRadius={2}
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      gap="1rem"
      sx={{
        border: "2px solid white",
        backgroundColor: theme.dark.colors.palette.purple.lavender,
        transition: "0.2s",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: theme.dark.colors.palette.purple.veronica,
        },
      }}
    >
      <Box textAlign="center">{icon}</Box>

      <Typography
        textAlign="center"
        fontSize="1.5rem"
        color={theme.dark.colors.defaultMain}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default ButtonCard;
