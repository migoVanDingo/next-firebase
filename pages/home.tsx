import React, { useState } from "react";
import styled from "styled-components";
import Themer from "../components/Theme/Themer";
import { MenuItems } from "../components/Navbar/MenuItems";
import Link from "next/link";
import { whoItsForText } from "../public/assets/sections/text-who-its-for";

interface ISNavbar{
  myStyles: any;
}
interface ISList{
  myStyles: any;
}
interface ISListItem{
  myStyles: any;
}

const SNavbar = styled.div<ISNavbar>`
  background: ${(props) => props.myStyles.primaryColor};
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    ${(props) => props.myStyles.primaryColor} 0%,
    ${(props) => props.myStyles.secondaryColor} 100%
  );
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.myStyles.justifyContent == "left"
      ? "flex-start"
      : props.myStyles.justifyContent == "right"
      ? "flex-end"
      : props.myStyles.justifyContent == "center"
      ? "center"
      : "flex-end"};
  align-items: center;
  padding: 0px 2rem;
`;

const SList = styled.ul<ISList>`
  display: flex;
  list-style: none;
  gap: ${(props) => props.myStyles.gap + "rem"};
`;



const SListItem = styled.li<ISListItem>`
  padding: 5px 10px;
  border-radius: 4px;

  &:hover{
    background-color: white;
    color: blue;
    opacity: 0.5;
  }
`

let styles = {
  primaryColor: "",
  secondaryColor: "",
  positionCenter: "",
  gap: 0,
  
};

export default function home() {
  const [styleStore, setStyleStore] = useState<any>(styles);

  function handleInput(e: any) {
    switch (e.target.id) {
      case "color-primary":
        setStyleStore({
          ...styleStore,
          primaryColor: e.target.value,
        });
        break;

      case "color-secondary":
        setStyleStore({
          ...styleStore,
          secondaryColor: e.target.value,
        });
        break;

      case "justify-content":
        setStyleStore({
          ...styleStore,
          justifyContent: e.target.value,
        });
        break;

      case "gap":
        setStyleStore({
          ...styleStore,
          gap: e.target.value,
        });
        break;

      default:
        break;
    }
  }
  console.log(styleStore);

  return (
    <>
      <SNavbar myStyles={styleStore}>
        <SList myStyles={styleStore}>
         {
          MenuItems && MenuItems.map((item, index) => {
            if(item.cName === 'nav-links') {
              return(
                <SListItem myStyles={styleStore} key={index}>
                  <Link href={item.url} >{item.title}</Link>
                </SListItem>
              )
            }
          })
         }
        </SList>
      </SNavbar>
      <Themer handleInput={handleInput} headerStyles={styleStore} />
    </>
  );
}
