import ButtonCard from "../../components/ButtonCard";
import Logo from "../../components/Logo";
import { Box, useTheme } from "@mui/material";
import { TiPlus } from "react-icons/ti";
import { FaTools } from "react-icons/fa";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="3rem"
    >
      <Logo />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <ButtonCard
          icon={<TiPlus size={60} color={theme.dark.colors.defaultMain} />}
        >
          Ver equipamentos
        </ButtonCard>
        <ButtonCard
          icon={<FaTools size={60} color={theme.dark.colors.defaultMain} />}
        >
          Adicionar equipamento
        </ButtonCard>
      </Box>
    </Box>
  );
};

export default Home;
