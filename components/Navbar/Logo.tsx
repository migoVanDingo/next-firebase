import React from 'react'
import Image from "next/image"
import logo from "../../public/assets/header/logo.png"

export default function Logo() {
  return (

    <Image
    alt="logo"
    src={logo}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
  )
}
