import { Box, Breadcrumbs, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
  padding: 0.3rem 0.8rem;
  border-radius: 9999999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  &:hover {
    background-color: ${(props) => props.$bgColorHover};
  }
`;

const LinkMenu = ({ children, to }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const selected = pathname === to;

  return (
    <LinkStyled
      to={to}
      $color={
        selected
          ? theme.dark.colors.palette.blue.five
          : theme.dark.colors.defaultMain
      }
      $bgColorHover={!selected && theme.dark.colors.palette.blue.two}
      $bgColor={
        selected
          ? theme.dark.colors.defaultMain
          : theme.dark.colors.palette.blue.five
      }
      $selected={selected}
    >
      {children}
    </LinkStyled>
  );
};

const Menu = () => {
  const theme = useTheme();
  return (
    <Box marginBottom="4rem">
      <Breadcrumbs color={theme.dark.colors.defaultMain}>
        <LinkMenu to="/">Início</LinkMenu>
        <LinkMenu to="/showEquipments">Ver equipamentos</LinkMenu>
        <LinkMenu to="/addEquipment">Adicionar equipamento</LinkMenu>
        <LinkMenu to="/reserveEquipment">Reservar equipamento</LinkMenu>
      </Breadcrumbs>
    </Box>
  );
};

export default Menu;
