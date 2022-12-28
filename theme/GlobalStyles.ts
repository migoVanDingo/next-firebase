import { createGlobalStyle } from "styled-components"

/* interface ITheme{

    id: string
    name: string
    colors: {
        primaryColor: string
        secondaryColor: string
        gradientColor: string
        mobileLinkColor: string
        mobileLinkColorHover: string
        gap: string
    }
    header: {
        height: string
        justifyLinks: string
    }
    font: string

   

} */

export const GlobalStyles = createGlobalStyle`

    body{
        background: ${({ theme }) => theme.colors.primaryColor };
        color: white;
        font-family: ${({ theme }) => theme.font};
        transition: all 0.5s linear;

    }

    a {
        color: white;
        cursor: pointer;
    }

    button{
        border: 0;
        display: inline-block;
        padding: 12px 24px;
        font-size: 14px;
        border-radius: 4px;
        margin-top: 5px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondaryColor };
        color: white;
        font-family: ${({ theme }) => theme.font };
    }

  
`