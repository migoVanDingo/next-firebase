import Image from "next/image";
import styled from "styled-components";

interface IHeadingParagraph {
  heading?: string;
  text?: string;
  imgSrc?: string;
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  line-height: 35px;

`;



export default function Heading_Paragraph_1({
  heading,
  text,
  imgSrc,
}: IHeadingParagraph) {
  heading = "Curriculum";
  text =
    "At the Chinese Shao-Lin Center, you will see actual spear forms and physical training once performed and taught by Chinese Generals one thousand years ago! You will be taught animal styles, like Tiger, Eagle Claw, and Praying Mantis, created by Shao-Lin monks from the Ancient Shao-Lin Temples! You will hear the incredible stories and legends of Shao-Lin heroes and heroines! You will study the ancient breathing and internal health exercises of the most famous physician in Chinese history so that you too can live a longer, richer, and healthier life! And you will learn the most devastating and effective self-defense techniques and strategies of the ancient Shao-lin Masters!";
  return (
    <SContainer>
      <h2>{heading}</h2>
      <p>{text}</p>
    </SContainer>
  );
}
