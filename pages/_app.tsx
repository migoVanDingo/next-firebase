import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { GlobalStyles, light_1, dark_1 } from "../theme/ThemeConfig";
import styled from "styled-components";
import Image from "next/image";
import img from "../public/assets/body/white-background-with-triangle-patterns_1017-18410.webp";
import Sidebar from "../components/Sidebar/Sidebar";

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  line-height: ${({ theme }) => theme.text.lineHeight};
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

  let scrollY = 0

  const [top, setTop] = useState(scrollY)

  useEffect(() => {
    function handleScroll(e: any) {
      
      scrollY = Math.floor(window.scrollY)
      
        setTop(scrollY)
    
        
      //console.log("scrollTop: ", scrollY);
    }



    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

  function handleToggleSidebar(){
    setToggleSidebar(!toggleSidebar)
    console.log(toggleSidebar)
  }

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
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={handleToggleSidebar} scrollY={top} headerHeight={theme === "dark" ? (dark_1).header.height :(light_1).header.height}  />
        <Component {...pageProps} toggleSidebar={toggleSidebar} />
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
