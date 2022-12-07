import React from "react";
import styled from "styled-components";
import wordClasses from "../../public/assets/home/word_classes-min.png";
import wordSchedule from "../../public/assets/home/word_schedule-min.png";
import wordAbout from "../../public/assets/home/word_about-min.png";
import charClasses from "../../public/assets/home/char_classes-min.png";
import scrollArt from "../../public/assets/home/scrolltexture-min.png";
import coin1 from "../../public/assets/home/coin1-min.png";
import Image from "next/image";

const SContainer = styled.div`
  display: flex;
  position: relative;
  padding: 1em 6em;
  border: 4px solid red;
  height: auto;
  flex-direction: column;
  padding: 80px 0px;

`;

const SImageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SImage = styled.div`
    display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid blue;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  height: 60vh;
`

const SHeading = styled.h2`
    display: block;
    margin: auto;
`

const rows = [
  {
    heading: wordClasses,
    char: charClasses,
    coin: coin1,
    backGround: scrollArt,
  },
  {
    heading: wordClasses,
    char: charClasses,
    coin: coin1,
    backGround: scrollArt,
  },
  {
    heading: wordClasses,
    char: charClasses,
    coin: coin1,
    backGround: scrollArt,
  },
];

const scrollImageStyle:any = {
    objectFit: "none",
    position:"relative",
    border: "1px solid green",
    margin: 0,
    padding: 0,
}




export default function ArtRowSection() {
  return (
    
    <SContainer>
        <SHeading >Explore</SHeading>
        <SImageContainer>
      {rows.map((row) => {
        return (
          <SImage>
            <Image
              alt="scroll"
              src={row.backGround}
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                position: "absolute",
              }}
            />
            <Image
              alt="scroll"
              src={row.heading}
              className="heading"
              sizes="90vw"
              style={scrollImageStyle}
            />
            <Image
              alt="scroll"
              src={row.char}
              className="char"
              sizes="40vw"
              style={scrollImageStyle}
            />
            <Image
              alt="scroll"
              src={row.coin}
              className="coin"
              sizes="120vw"
              style={scrollImageStyle}
            />
          </SImage>
        );
      })}
      </SImageContainer>
    </SContainer>
  );
}
