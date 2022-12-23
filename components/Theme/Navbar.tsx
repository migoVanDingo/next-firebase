import { builtinModules } from "module";
import styled, { ThemeProvider } from "styled-components";
import { MenuItems } from "../Navbar/MenuItems";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const theme = {
  primaryColor: "#3e3e3e",
  secondaryColor: "red",
  justifyContent: "right",
  mobileLinkcolor: "#2c2c2c",
  mobileLinkColorHover: "#202020",
  gap: "20px",
  height: "80px",
};

const SNavbar = styled.div`
  background: ${(props) => props.theme.primaryColor};
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    ${(props) => props.theme.primaryColor} 0%,
    ${(props) =>
        props.theme.gradientPrimary
          ? props.theme.gradientPrimary
          : props.theme.primaryColor}
      100%
  );
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.theme.justifyContent == "left"
      ? "flex-start"
      : props.theme.justifyContent == "right"
      ? "flex-end"
      : props.theme.justifyContent == "center"
      ? "center"
      : "flex-end"};
  align-items: center;
  padding: 0px 2rem;

  @media screen and (max-width: 880px) {
    justify-content: center;
  }
`;

SNavbar.defaultProps = {
  theme: {
    primaryColor: "purple",
    gradientPrimary: "",
    secondaryColor: "blue",
    justifyContent: "center",
    height: "80px",
  },
};

const SList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${(props) => props.theme.gap + "rem"};

  @media screen and (max-width: 880px) {
    position: absolute;
    flex-direction: column;
    top: ${(props) => props.theme.height};
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius: 0;
    height: calc(100vh - ${(props) => props.theme.height});
    
    left: -200%;
    opacity: 0.2;
    transition: all 0.5s ease;

    &.active{
      left: 0;
      opacity: 1;
    }
    
  }
`;

const SListItem = styled.li`
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    background-color: white;
    color: white;
    opacity: 0.5;
  }

  @media screen and (max-width: 880px) {
    background-color: ${(props) => props.theme.primaryColor};
    width: 100vw;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.mobileLinkcolor};
    border-top: 1px solid ${(props) => props.theme.primaryColor};
  
    
    &:hover{
      background-color: ${(props) => props.theme.mobileLinkColorHover};
      opacity: 1;
    }

  }
`;

const SIconContainer = styled.div`
  height: "";
  width: "";
  border: "";
  font-size: 25px;
  position: absolute;
  top: 1em;
  right: 1em;
  
`;

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <SNavbar>
          <SList className={isMenuActive ? "active" : ""}>
            {MenuItems &&
              MenuItems.map((item, index) => {
                if (item.cName === "nav-links") {
                  return (
                    <SListItem key={index}>
                      <Link style={{width: '100%', height: '100%', display: 'flex', justifyContent:"center", alignItems:"center"}} href={item.url}>{item.title}</Link>
                    </SListItem>
                  );
                }
              })}
          </SList>

          <SIconContainer>
            <FontAwesomeIcon
              onClick={handleMenuClick}
              icon={isMenuActive ? faX : faBars}
            />
          </SIconContainer>
        </SNavbar>
      </ThemeProvider>
    </>
  );
}
