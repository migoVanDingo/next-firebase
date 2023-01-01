import { builtinModules } from "module";
import styled, { ThemeProvider } from "styled-components";
import { MenuItems } from "../Navbar/MenuItems";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "../Navbar/Logo";

/* const theme = {
  primaryColor: "#3e3e3e",
  secondaryColor: "red",
  justifyContent: "right",
  mobileLinkcolor: "#2c2c2c",
  mobileLinkColorHover: "#202020",
  gap: "1.2",
  height: "80px",
}; */

const SNavbar = styled.div`
  background: ${({theme}) => theme.primaryColor};
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    ${({theme}) => theme.colors.primaryColor} 0%,
    ${({theme}) =>
        theme.colors.gradientPrimary
          ? theme.colors.gradientPrimary
          : theme.colors.primaryColor}
      100%
  );
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: ${({theme}) =>
    theme.header.justifyContent == "left"
      ? "flex-start"
      : theme.header.justifyContent == "right"
      ? "flex-end"
      : theme.header.justifyContent == "center"
      ? "center"
      : "flex-end"};
  align-items: center;
  padding: 0px 2rem;
  box-shadow: 0px 0px 3px #3d3d3d;
  z-index: 500;

  @media screen and (max-width: 880px) {
    justify-content: center;
    position: fixed;

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
  gap: ${({theme}) => theme.header.gap + "rem"};

  @media screen and (max-width: 880px) {
    position: absolute;
    flex-direction: column;
    top: ${({theme}) => theme.header.height};
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius: 0;
    height: calc(100vh - ${({theme}) => theme.header.height});
    
    left: -200%;
    opacity: 0.2;
    transition: all 0.5s ease;
    gap: 0;

    &.active{
      left: 0;
      opacity: 1;
      position: fixed;
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
    background-color: ${({theme}) => theme.colors.primaryColor};
    width: 100vw;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.mobileLinkcolor};
    border-top: 1px solid ${({theme}) => theme.colors.primaryColor};
  
    
    &:hover{
      background-color: ${({theme}) => theme.colors.mobileLinkColorHover};
      opacity: 1;
    }

  }
`;

const SIconContainer = styled.div`
  height: 100%;
  width: 100%;
  border: "";
  font-size: 25px;
  float: right;
  top: 1em;
  right: 1em;
  display: none;
  

  @media screen and (max-width: 880px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const SLogoContainer = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 1rem;
  top: .7rem;
  border-radius: 150px;
  box-shadow: 0px 0px 8px #540000;
  z-index: 10;
  
`;

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <>
        <SNavbar>
        <SLogoContainer>
        <Logo />
      </SLogoContainer>
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
              style={{}}
            />
          </SIconContainer>
        </SNavbar>
    
    </>
  );
}
