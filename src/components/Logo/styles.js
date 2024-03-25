import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const BoxStyled = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    color: ${(props) => props.theme.dark.colors.defaultMain};
    width: 7%;
    height: 7%;
  }
`;

const TypographyStyled = styled(Typography)`
  && {
    color: ${(props) => props.theme.dark.colors.defaultMain};
    font-size: 2rem;
  }
`;

export { BoxStyled, TypographyStyled };
