import React from 'react'
import Image from "next/image"
import styled from "styled-components"
import shaolinTemple from "../../public/assets/home/shaolintemple0-min.jpg"

const SLandingContainer = styled.div`

    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    z-index: 50;
`



export default function LandingPage() {
  return (
    <SLandingContainer>
        <Image
    alt="logo"
    src={shaolinTemple}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
    </SLandingContainer>
  )
}
