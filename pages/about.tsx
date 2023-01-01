import Image from "next/image"
import styled from 'styled-components';
import Navbar from "../components/Theme/Navbar";
import pic1 from "../public/assets/about/File11-min.jpg"
import pic2 from "../public/assets/about/founders-min.jpg"

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

  &.color-row {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: white;
  }
`;

export default function about({toggleSidebar}: any) {
  return (
    <>
        <Navbar />
        <SMain className={toggleSidebar ? "deactivate-sidebar" : ""}>
    <SGridItem className="item"></SGridItem>
    <SGridItem className="item main-content">
      <h3>Why learn Shao-Lin Kung-Fu?</h3>
      <p style={{ lineHeight: "35px", objectFit: "contain" }}>
        <Image
          src={pic1}
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
    <SGridItem className="item color-row"></SGridItem>
    <SGridItem className="item main-content color-row">
      <h3>Why learn Shao-Lin Kung-Fu?</h3>
      <p style={{ lineHeight: "35px", objectFit: "contain" }}>
        <Image
          src={pic2}
          alt={"art1"}
          style={{
            float: "left",
            height: "320px",
            width: "500px",
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
    <SGridItem className="item color-row"></SGridItem>
    <SGridItem className="item color-row"></SGridItem>
  </SMain></>
  )
}
