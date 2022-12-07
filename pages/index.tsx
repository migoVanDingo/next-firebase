import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import LandingPage from '../components/Common/LandingPage'
import styled from "styled-components"
import TextSection from '../components/Common/TextSection'
import { welcomeText } from "../public/assets/sections/text-welcome"
import { welcomeHeading } from "../public/assets/sections/heading-welcome"
import TextArtSection from '../components/Common/TextArtSection'
import { whyLearnHeading } from '../public/assets/sections/heading-why-learn'
import { whyLearnText } from '../public/assets/sections/text-why-learn'
import { whoItsForHeading } from '../public/assets/sections/heading-who-its-for'
import { whoItsForText } from '../public/assets/sections/text-who-its-for'
import art1 from "../public/assets/home/art1-min.jpg";
import art2 from "../public/assets/home/art2-min.jpg";
import ArtRowSection from '../components/Common/ArtRowSection'

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;

`



export default function Home() {
  return (
    <SBody >
      <Navbar />
      <LandingPage/>
      <TextSection heading={welcomeHeading} text={welcomeText} />
      <TextArtSection heading={whyLearnHeading} text={whyLearnText} artwork={art1} imageWidth={700} imageHeight={500} />
      <TextArtSection heading={whoItsForHeading} text={whoItsForText} artwork={art2} invert={true}imageWidth={667} imageHeight={725}/>
      <ArtRowSection />
    </SBody>
  )
}
