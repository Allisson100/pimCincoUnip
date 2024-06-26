import { Box, Breadcrumbs, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { FaTools } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  font-size: 1.1rem;
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
  color: ${(props) => props.$color};
  padding: 0.3rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    color: ${(props) => props.$bgColorHover};
  }
`;

const LinkMenu = ({ children, to }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const selected = pathname === to;

  return (
    <LinkStyled
      to={to}
      $color={selected ? "blue" : "black"}
      $bgColorHover={!selected && "blue"}
      $underline={selected}
    >
      {children}
    </LinkStyled>
  );
};

const Menu = () => {
  const theme = useTheme();
  return (
    <Box>
      <Breadcrumbs color="black">
        <LinkMenu to="/">
          <MdHome />
          Início
        </LinkMenu>
        <LinkMenu to="/showEquipments">
          <FaTools />
          Ver equipamentos
        </LinkMenu>
        <LinkMenu to="/addEquipment">
          <TiPlus />
          Adicionar equipamento
        </LinkMenu>
        <LinkMenu to="/reserveEquipment">
          <FaClock />
          Reservar equipamento
        </LinkMenu>
      </Breadcrumbs>
    </Box>
  );
};

export default Menu;
