import Cta from "../../../components/cta";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import NavBar from "../../../components/navbar";

import styled from "styled-components"
import image from "../../../assets/linebet.jpg"
import video from "../../../assets/linebet.mp4"
import Badge from "../../../components/badge";
import VideoSection from "../../../components/videoSection";
import Features from "../../../components/Features";
import BottomNavBar from "../../../components/bottomNavbar";
import img from '../../../assets/B5511.jpg'

const HeroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 0rem;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ), url(${image});
    background-position: center center;

    @media (max-width: 1080px) {
        padding: 2rem 0rem;
    }
`
export const CtaSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0rem;
    height: auto;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${image});
    background-position: center center;

    @media (max-width: 1080px) {
    padding: 2rem 0rem;
    }
`

const BottomMenuSection = styled.div`
    display: none;

    @media (max-width: 540px) {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
`

export default function Linebet() {
    document.title = `Linebet | Code Promo B5511`

    return (
        <>
            <NavBar />
            <HeroSection>
                <Hero code="B5511" page='LineBet' path="https://b5511.lineorg.com/" description="LINEBET possède la licence internationale de Curaçao n° 8048/JAZ. Concluez des paris sur tous les événements dans l'application mobile LINEBET !" />
            </HeroSection>
            <Features />
            <VideoSection code="B5511" video={video} page="LineBet" />
            <CtaSection>
                <div className="container py-5">
                    <Badge path='https://b5511.lineorg.com/' accroche="👋Toujours pas de compte ? Alors inscrivez-vous en cliquant sur le lien ci-dessous et en utilisant le code promotionnel B5511. Recevez jusqu'à 100$ de bonus pour commencer✊💪" page='LineBet' />
                </div>
            </CtaSection>
            <Cta img={img}/>
            <Footer code="B5511" />
            <BottomMenuSection>
                <BottomNavBar />
            </BottomMenuSection>
        </>
    )
}