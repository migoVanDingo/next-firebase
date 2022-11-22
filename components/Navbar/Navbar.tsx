import React, { useState } from "react";
import Link from "next/link";
import { MenuItems } from "./MenuItems";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Button from "../Common/Button";

const SNavbar = styled.nav`
  background: linear-gradient(
    0deg,
    rgb(175, 31, 0) 0%,
    rgba(250, 17, 0, 1) 100%
  );
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  @media (max-width: 960px){
    position: relative;
  };

`;

const SLinkContainer = styled.ul`


    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 90vw;
    justify-content: end;
    padding-right: 2rem;

    @media (max-width: 960px){
        display: flex;
        flex-direction: column;
        height: 85vh;
        width: 100%;
        position: absolute;
        top: 56px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;

        &.active{
            background-color:rgb(175, 31, 0);
            left: 0;
            opacity: 1;
            transition: all 0.5 ease;
            z-index: 1;
        }
    };

`;

const SNavLinks = styled.li.attrs(props => ({className: props.className}))`
    color: white;
    text-decoration: none;
    padding: 0.3rem 0.7rem;

    &.nav-links:hover{
        background-color: #FE3021;
        border-radius: 4px;
        transition: all 0.2s ease-out;
    };


    &.nav-links-mobile{
            display: none;
        }


    @media (max-width: 960px){
        text-align: center;
        padding: 1.5rem 2rem;
        width: 100%;
        display: table;

        &:hover{
            border-radius: 0;
            background-color: #af0c00;
        }

        &.nav-links-mobile{
            display: block;
            text-align: center;
            padding: 1.5rem;
            margin: 2rem auto;
            border-radius: 4px;
            width: 100%;
            background: rgb(175, 31, 0);
            text-decoration: none;
            color: #fff;
            font-size: 1.5rem;
        }

        &.nav-links-mobile:hover{
        
            background: rgb(108, 20, 0);
            transition: 250ms;
       
        }

    }

`

const SMenuIcon = styled.div`
    display: none;

    @media (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`


export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleSignUp(){
    console.log('ioseph')
  }


  return (
    <SNavbar className="NavbarItems">
      <SMenuIcon className="menuIcon">
        <FontAwesomeIcon
          icon={isClicked ? faX : faBars}
          onClick={handleClick}
          
        />
      </SMenuIcon>
      <SLinkContainer className={isClicked ? "active" : ''}>
        { MenuItems &&
          MenuItems.map((item: any, index) => {
            return (
              <SNavLinks className={item.cName} key={index}>
                <Link  href={item.url}>
                  {item.title}
                </Link>
              </SNavLinks>
            );
          })}
      </SLinkContainer>
      <Button buttonStyle={""} buttonSize={""} type={""} onClick={handleSignUp}>Sign Up</Button>
    </SNavbar>
  );
}
