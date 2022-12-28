import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyles, light_1, dark_1 } from "../theme/ThemeConfig";
import styled from "styled-components";
import Image from "next/image";
import img from "../public/assets/body/white-background-with-triangle-patterns_1017-18410.webp";


const SBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primaryColor};
  z-index: -1000;

`;

/* const SBgImage = styled.div`
  opacity: ${({ theme }) => theme.colors.opacity};
  position: absolute;
  top: ${({theme}) => theme.header.height};
  width: 100vw;
  height: 100vh;
  z-index: 10;
  border: 4px solid blue;
  background-repeat: repeat;

`; */

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("dark");

  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  if (theme === "dark") console.log(JSON.stringify(dark_1));
  else console.log(JSON.stringify(light_1));

  return (
    <ThemeProvider theme={theme === "dark" ? dark_1 : light_1}>
      <GlobalStyles />
      <SBody>
      <button
        onClick={toggleTheme}
        style={{ position: "fixed", zIndex: "1000" }}
      >
        {" "}
        Switch
      </button>
      <Component {...pageProps} />
     {/*  <SBgImage>
      <Image
          src={img}
          alt={"image"}
           style={{
            position: "absolute",
            backgroundRepeat: "repeat",
            zIndex: "10",
            height: "100vh",
            width: "100vw",
          }} 
        />
        </SBgImage> */}
      </SBody>
      
    </ThemeProvider>
  );
}
