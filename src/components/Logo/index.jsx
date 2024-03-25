import { IoSchool } from "react-icons/io5";
import { BoxStyled, TypographyStyled } from "./styles";

const Logo = () => {
  return (
    <BoxStyled component="h1">
      <IoSchool />
      <TypographyStyled component="p">Colégio Vencer Sempre </TypographyStyled>
    </BoxStyled>
  );
};

export default Logo;
