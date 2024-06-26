import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";

const EquipmentCard = ({ equipment }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      justifyContent={isMobile ? "center" : "flex-start"}
      alignItems="center"
      gap="1rem"
      padding={2}
      border="3px solid black"
      borderRadius={2}
      color="white"
      bgcolor={theme.dark.colors.palette.blue.five}
      width={isMobile ? "100%" : "30%"}
      flexWrap="wrap"
      sx={{
        "&:hover": {
          backgroundColor: theme.dark.colors.palette.blue.four,
        },
      }}
    >
      <Box component="span">
        <equipment.icon size={60} color={theme.dark.colors.defaultMain} />
      </Box>
      <Box component="h2" textAlign="center">
        {equipment.name}
      </Box>
    </Box>
  );
};

export default EquipmentCard;
