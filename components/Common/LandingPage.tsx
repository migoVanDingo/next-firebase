import React from 'react'
import Image from "next/image"
import styled from "styled-components"
import shaolinTemple from "../../public/assets/home/shaolintemple0-min.jpg"

const SLandingContainer = styled.div`

    position: relative;
    width: calc(100% - ${({theme}) => theme.sidebar.width});
    height: calc(100vh - 80px);
    z-index: 50;
    transition: all 0.2s ease;

    &.extend {
      width: 100vw;
    }
`



export default function LandingPage({toggleSidebar}: any) {
  return (
    <SLandingContainer className={toggleSidebar ? "extend":""}>
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
