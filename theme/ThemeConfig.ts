import { createGlobalStyle } from "styled-components";

export const light_1 = {
  colors: {
    primaryColor: "white",
    secondaryColor: "red",
    mobileLinkcolor: "white",
    mobileLinkColorHover: "#d3d3d3",
    textColor: "black",
    opacity: "1"
  },
  header: {
    justifyContent: "right",
    gap: "1.2",
    height: "80px",
  },
};

export const dark_1 = {
  colors: {
    primaryColor: "#1f1f1f",
    secondaryColor: "red",
    mobileLinkcolor: "#2c2c2c",
    mobileLinkColorHover: "#202020",
    textColor: "#dbdbdb",
    opacity: "0.3"
  },
  header: {
    justifyContent: "right",
    gap: "1.2",
    height: "80px",
  },

};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.primary };
        color: ${({ theme }) => theme.colors.textColor };
        transition: all 0.5s linear;
    }
`
