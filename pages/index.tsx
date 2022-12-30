import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
//import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/Common/LandingPage";
import styled, { ThemeConsumer } from "styled-components";
import TextSection from "../components/Common/TextSection";
import { welcomeText } from "../public/assets/sections/text-welcome";
import { welcomeHeading } from "../public/assets/sections/heading-welcome";
import TextArtSection from "../components/Common/TextArtSection";
import { whyLearnHeading } from "../public/assets/sections/heading-why-learn";
import { whyLearnText } from "../public/assets/sections/text-why-learn";
import { whoItsForHeading } from "../public/assets/sections/heading-who-its-for";
import { whoItsForText } from "../public/assets/sections/text-who-its-for";
import art1 from "../public/assets/home/art1-min.jpg";
import art2 from "../public/assets/home/art2-min.jpg";
import ArtRowSection from "../components/Common/ArtRowSection";
import { useReducer, useState } from "react";
import Navbar from "../components/Theme/Navbar";
import img from "../public/assets/body/white-background-with-triangle-patterns_1017-18410.webp";
import { repeat } from "lodash";

const SMain = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: [start] 150px [line2] auto [line3] 150px [line4] ${({theme}) => theme.sidebar.width} [end];
  //grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  transition: all 0.2s ease;

  &.deactivate-sidebar {
    grid-template-columns: [start] 150px [line2] auto [line3] 150px [line4] 2rem [end];
  }

`;

const SGridItem = styled.div`
  z-index: 15;
  &.item {

    display: flex;
    flex-direction: column;
  }

  &.main-content {
    padding: 0px 2rem 1rem;
  }
`;

const STextImage = styled.div`
  float: right;
  height: 320px;
  width: 450px;
  border: 2px solid rebeccapurple;
`;

export default function Home({toggleSidebar}: any) {
  
  
  console.log("booL: " + toggleSidebar)

  return (
    <>
      <Navbar />
      <LandingPage toggleSidebar={toggleSidebar}/>
      <SMain className={toggleSidebar ? "deactivate-sidebar" : ""}>
        <SGridItem className="item">1</SGridItem>
        <SGridItem className="item main-content">
          <TextSection heading={welcomeHeading} text={welcomeText} />
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item main-content">
          <h3>Why learn Shao-Lin Kung-Fu?</h3>
          <p style={{ lineHeight: "35px", objectFit: "contain" }}>
            <Image
              src={art1}
              alt={"art1"}
              style={{
                float: "right",
                height: "320px",
                width: "450px",
                margin: "20px",
              }}
            />
            We offer training that you cannot find anywhere else in New Mexico!
            We have the most comprehensive martial art from the Orient and
            Shao-Lin Kung-Fu is considered the origin of all the martial arts.
            True Shao-Lin training is for health and self-defense, not for body
            destructive gymnastics or point-sparring tournaments! At the Chinese
            Shao-Lin Center, you will train in a non-competitive, adult-centered
            environment. There are no trophies on the walls or other displays of
            ego. We also offer the most affordable rates for instruction in New
            Mexico. Training at the Chinese Shao-Lin Center of New Mexico is so
            comprehensive and inexpensive that it can replace having to go to a
            gym, running, swimming, taking self-defense courses, yoga, cross
            fit, meditation & tai chi, cross training, or MMA! You get all of
            that - and so much more - for less than $50 per month with a 1 year
            membership! Check out our Membership page to find the membership
            right for you!
          </p>
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item main-content">
          <h3>Why learn Shao-Lin Kung-Fu?</h3>
          <p style={{ lineHeight: "35px", objectFit: "contain" }}>
            <Image
              src={art2}
              alt={"art1"}
              style={{
                float: "left",
                height: "450px",
                width: "400px",
                margin: "20px",
                marginLeft: "0"
              }}
            />
            We offer training that you cannot find anywhere else in New Mexico!
            We have the most comprehensive martial art from the Orient and
            Shao-Lin Kung-Fu is considered the origin of all the martial arts.
            True Shao-Lin training is for health and self-defense, not for body
            destructive gymnastics or point-sparring tournaments! At the Chinese
            Shao-Lin Center, you will train in a non-competitive, adult-centered
            environment. There are no trophies on the walls or other displays of
            ego. We also offer the most affordable rates for instruction in New
            Mexico. Training at the Chinese Shao-Lin Center of New Mexico is so
            comprehensive and inexpensive that it can replace having to go to a
            gym, running, swimming, taking self-defense courses, yoga, cross
            fit, meditation & tai chi, cross training, or MMA! You get all of
            that - and so much more - for less than $50 per month with a 1 year
            membership! Check out our Membership page to find the membership
            right for you!
          </p>
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
      </SMain>
    </>
  );

  /*  
  styled-components-round-1

 return (
    <SBody >
      <Navbar />
      <LandingPage/>
      <TextSection heading={welcomeHeading} text={welcomeText} />
      <TextArtSection heading={whyLearnHeading} text={whyLearnText} artwork={art1} imageWidth={700} imageHeight={500} />
      <TextArtSection heading={whoItsForHeading} text={whoItsForText} artwork={art2} invert={true}imageWidth={667} imageHeight={725}/>
      <ArtRowSection />
    </SBody>
  ) */

  /* 
 ------ Attempts at creating my own theme -------
 const styleStoreInit = {
    primaryColor: '',
    secondaryColor: '',
  }

  const [styleStore, setStyleStore] = useState<any>(styleStoreInit)

  

  
  return (
    <div>
      <Nav styles={{primaryColor: styleStore.primaryColor, secondaryColor: styleStore.secondaryColor}} />
      
    </div>
      
  
  ); */
}
