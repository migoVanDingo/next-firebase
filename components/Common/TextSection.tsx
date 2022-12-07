import React from 'react'
import styled from "styled-components"

const SContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px 0px;
`

const SHeading = styled.h1`
    margin: auto;

`

const SText = styled.p`
    margin: auto;
    padding: 1em 15em;
    line-height: 2em;
`

interface ITextSection {
    heading: string
    text: string
}

export default function TextSection({ heading, text }: ITextSection) {
  return (
    <SContainer>
        <SHeading>{heading}</SHeading>
        <SText>{text}</SText>
    </SContainer>
  )
}
