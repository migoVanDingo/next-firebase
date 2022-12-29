import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../components/Theme/Navbar";
import styles from "../styles/Home.module.css";
import TextSection from "../components/Common/TextSection";
import img1 from "../public/assets/classes/File2-min.jpg";
import img2 from "../public/assets/classes/File10-min.jpg";
import img3 from "../public/assets/classes/File16-min.jpg";
import img4 from "../public/assets/classes/File9-min.jpg";
import img5 from "../public/assets/classes/DSC_0143-min.jpg";
import img6 from "../public/assets/classes/DSC_0573-min.jpg";
import img7 from "../public/assets/classes/File5-min.jpg";
import img8 from "../public/assets/classes/File6-min.jpg";


const SMain = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: [start] 150px [line2] auto [line3] 150px [line4] 400px [end];
  //grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
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

  &.img-cont {
    height: auto;
    width: 50%;

    grid-column: start/line2;
    display: flex;
    flex-direction: row;
  }
`;

const SRowPics = styled.div`
  display: flex;
  width: calc(100% - 400px);
  flex-direction: row;
  //grid-template-columns: [start] auto [line2] 300px [end];
`;

const welcomeHeading = "Classes";
const welcomeText =
  "Like the Shao-Lin monks and nuns of Ancient China, we cross-train in a variety of styles and conditioning which makes the Shao-Lin system of Kung-Fu the most complete martial art! The amount of Kung-Fu, Tai Chi/Chi Kung and Wooden Man (Dummy) training we offer is unrivaled in the state of New Mexico.";

export default function classes() {
  return (
    <>
      <Navbar />
      <SMain>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item main-content">
          <TextSection heading={welcomeHeading} text={welcomeText} />
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item color-row"></SGridItem>
        <SGridItem className="item main-content color-row">
          <h3>Curriculum</h3>
          <p>
            At the Chinese Shao-Lin Center, you will see actual spear forms and
            physical training once performed and taught by Chinese Generals one
            thousand years ago! You will be taught animal styles, like Tiger,
            Eagle Claw, and Praying Mantis, created by Shao-Lin monks from the
            Ancient Shao-Lin Temples! You will hear the incredible stories and
            legends of Shao-Lin heroes and heroines! You will study the ancient
            breathing and internal health exercises of the most famous physician
            in Chinese history so that you too can live a longer, richer, and
            healthier life! And you will learn the most devastating and
            effective self-defense techniques and strategies of the ancient
            Shao-lin Masters!
          </p>
        </SGridItem>
        <SGridItem className="item color-row"></SGridItem>
        <SGridItem className="item color-row"></SGridItem>
      </SMain>
      <SRowPics>
        <SGridItem className="img-cont">
          <Image
            src={img1}
            alt={"img1"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
        <SGridItem className="img-cont">
          <Image
            src={img2}
            alt={"img2"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
      </SRowPics>
      <SMain>
        <SGridItem className="item "></SGridItem>
        <SGridItem className="item main-content ">
          <h3>Instruction</h3>
          <p>
            When you train at the Chinese Shao-Lin Center, you're studying real
            Kung-Fu with qualified instructors whose goal is to pass on the
            Shao-Lin knowledge in its entirety! Your instructors at the
            Albuquerque Shao-Lin Center have amassed a fantastic amount of
            martial arts, chi kung, and techniques that they will unselfishly
            present to you! Therefore, you will receive everything that you need
            to become an effective martial artist, more vibrant, healthier, and
            to feel younger and stronger than ever! Check out our About Us page
            to learn more about the instructors at Shao-Lin New Mexico.
            <br />
            <br />
            To find some aspect of real Shao-Lin Kung-Fu elsewhere, you would
            have to travel thousands of miles around the world, pay hundreds of
            thousands of dollars, and employ the services of over a dozen
            different instructors. And even if you found someone teaching real
            Shao-Lin Kung-Fu, you would only find a fraction of the knowledge
            that the Chinese Shao-Lin Center has to offer!
            <br />
            <br />
            When you study at the Chinese Shao-Lin Center in Albuquerque, you
            are, without a doubt, studying at the finest school in New Mexico -
            and at a price that EVERYONE can afford and will continue to afford
            throughout their lifetime of training! Classes are exciting,
            challenging, healthy, and fun! Most people notice a difference in
            health and fitness levels after just a few weeks of training! See
            our Schedule page for class hours! You are NEVER too old to start
            this healthy activity!
          </p>
        </SGridItem>
        <SGridItem className="item "></SGridItem>
        <SGridItem className="item "></SGridItem>
      </SMain>
      <SRowPics>
        <SGridItem className="img-cont">
          <Image
            src={img3}
            alt={"img1"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
        <SGridItem className="img-cont">
          <Image
            src={img4}
            alt={"img2"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
      </SRowPics>

      <SMain>
        <SGridItem className="item color-row"></SGridItem>
        <SGridItem className="item main-content  color-row">
          <h3>Wooden Man & Iron Monk Training</h3>
          <h4>Wooden Man</h4>
          <p>
            The forms and training with the Shao-Lin "Wooden Man" make up an
            important part of the Kung-Fu skills and conditioning found at our
            Shao-Lin schools. Also called the "Wooden Dummy" and popularized by
            Wing Chun teacher Ip Man, the Shao-Lin "Wooden Man" is the original
            training and predates Wing Chun by 1000 years. The "Wooden Man"
            forms contain many of the fighting techniques and combinations of
            the Shao-Lin system. The advantages of training on the Wooden Man
            are that it can be hit as hard as the practitioner wishes and it can
            be trained for long hours whereas a partner might get bored. Also,
            the Wooden Man does not move much, thus the practitioner learns
            mobility while circling around the Wooden Man in conjunction with
            blocking and striking hand & foot techniques. The key benefits of
            training on a "Wooden Man" are: Improves Yao Li (power from the
            waist) Teaches the student the correct distance Encourages good
            structure and alignment in techniques Conditions the hands, arms and
            legs Helps the student practice applying techniques with force
          </p>

          <h4>Iron Monk Training</h4>
          <p>
            Iron Monk training is designed to integrate hard body conditioning
            into your existing Martial Arts training. The Iron Bone Rod and
            Striking Board have been designed for anyone interested in hard body
            conditioning and strengthening the skeletal structure. You are only
            as strong as the foundation you begin with. The development of Iron
            Monk training was designed to obtain the ancient Oriental training
            practices that the Chinese had known even before modern science.
            This training can easily be incorporated into any existing Martial
            Arts program as it can be used to prepare for offensive or defensive
            encounters. Protecting oneself from injury is the reasoning behind
            hard body conditioning. Eventually, even slight bruising will heal
            almost before it is noticed. The Iron Monk training is extremely
            versatile and can provide the following benefits if used as
            suggested: Assists in the increase of bone density Slows down or
            reverses the process of osteoporosis Helps prevents future injuries
            Prepares the body for rigorous training and combat and to eventually
            be able to withstand the kicks and blows while not getting bruised
            Equalizes the playing field to all martial artists, giving everyone
            the opportunity to improve & strengthen their offensive and
            defensive techniques
          </p>
        </SGridItem>
        <SGridItem className="item color-row"></SGridItem>
        <SGridItem className="item color-row"></SGridItem>
      </SMain>
      <SRowPics>
        <SGridItem className="img-cont">
          <Image
            src={img5}
            alt={"img1"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
        <SGridItem className="img-cont">
          <Image
            src={img6}
            alt={"img2"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
      </SRowPics>

      <SMain>

        <SGridItem className="item"></SGridItem>
        <SGridItem className="item main-content">
          <h3>Facilities</h3>
          <p>
          The Chinese Shao-Lin Center of Albuquerque is a beautiful and traditional stand alone building. Our authentic style mural artwork decorates the exterior of the building. Inside, large mirrors and a spacious training floor provide the perfect area to sharpen your Kung Fu skills. Track lighting and large windows keep our training areas well lit for night and evening classes. For weapons training we use our private, outdoor area. Bring a friend or observe a class from our visitor viewing area. We also have two clean, spacious bathrooms/changing rooms.

The Chinese Shao-Lin Center in Albuquerque has a tranquil oriental feel which can be attributed to it's collection of historical statues, wall scrolls, Chinese lanterns, beautiful indoor fountain and vibrant green plants. All of that along with traditional Chinese music creates a beautiful harmonius atmosphere.
          </p>
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
      </SMain>

      <SRowPics>
        <SGridItem className="img-cont">
          <Image
            src={img7}
            alt={"img1"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
        <SGridItem className="img-cont">
          <Image
            src={img8}
            alt={"img2"}
            style={{ width: "100%", height: "auto" }}
          />
        </SGridItem>
      </SRowPics>

      <SMain>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item main-content">
          <TextSection heading={"Become a Student at Shao-Lin New Mexico"} text={"For pricing and membership details please visit our Membership page. You can jump there by clicking on the link in the header, or by clicking the link below. membership link If you would like more information on what it means to be a Shao-Lin student, or if you have any questions or concerns visit our Getting Started page by clicking the Getting Started button at the bottom of any page on the site."} />
        </SGridItem>
        <SGridItem className="item"></SGridItem>
        <SGridItem className="item"></SGridItem>
        </SMain>
    </>
  );
}
