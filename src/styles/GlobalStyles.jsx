import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
    }

    #root {
        min-height: 100vh;
        width: 100%;
    }

    body {
        font-family: ${(props) => props.theme.dark.fonts.primary};
    }
`;
