import ButtonCard from "../../components/ButtonCard";
import Logo from "../../components/Logo";
import { Box, useTheme } from "@mui/material";
import { TiPlus } from "react-icons/ti";
import { FaTools } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      flexWrap="wrap"
    >
      <ButtonCard
        icon={<FaTools size={60} color={theme.dark.colors.defaultMain} />}
      >
        Ver equipamentos
      </ButtonCard>
      <ButtonCard
        icon={<TiPlus size={60} color={theme.dark.colors.defaultMain} />}
      >
        Adicionar equipamento
      </ButtonCard>
      <ButtonCard
        icon={<FaClock size={60} color={theme.dark.colors.defaultMain} />}
      >
        Reservar equipamento
      </ButtonCard>
    </Box>
  );
};

export default Home;
