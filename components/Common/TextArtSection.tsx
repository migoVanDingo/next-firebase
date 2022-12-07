import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
 

const SContainer = styled.div.attrs( props => ({ className: props.className}))`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100vh;
  padding: 1em 6em;

  &.invert{
    flex-direction: row-reverse;
  }
`;

const SText = styled.p`
    line-height: 2em;
`;

const SHeading = styled.h2``;

const STextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    

`

const SImageContainer = styled.div`

  display: flex;
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;

  
`;

interface ITextArtSection {
  heading: string;
  text: string;
  invert?: boolean
  artwork: StaticImageData
  imageWidth: number
  imageHeight: number
}

export default function TextArtSection({ heading, text, artwork, invert, imageWidth, imageHeight }: ITextArtSection) {

    const flexDirection = invert ? "invert" : ""
    

  return (
    <SContainer className={flexDirection}>
      <STextContainer >
        <SHeading>{heading}</SHeading>
        <SText>{text}</SText>
      </STextContainer >

      <SImageContainer>
        <Image
          alt="logo"
          src={artwork}
          width={imageWidth}
          height={imageHeight}
          sizes="100vw"
          
        />
      </SImageContainer>
    </SContainer>
  );
}
