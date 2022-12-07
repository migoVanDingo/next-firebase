import React from 'react'
import Image from "next/image"
import styled from "styled-components"
import shaolinTemple from "../../public/assets/home/shaolintemple0-min.jpg"

const SLandingContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
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
