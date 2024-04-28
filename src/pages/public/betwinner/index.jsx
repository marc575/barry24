import Cta from "../../../components/cta";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import NavBar from "../../../components/navbar";

import styled from "styled-components"
import image from "../../../assets/betwinner.jpg"
import video from "../../../assets/betwinner.mp4"
import Badge from "../../../components/badge";
import VideoSection from "../../../components/videoSection";
import Features from "../../../components/Features";
import BottomNavBar from "../../../components/bottomNavbar";

const HeroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 4rem 2rem 4rem;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ), url(${image});
    background-position: center center;

    @media (max-width: 1080px) {
        padding: 2rem;
    }

    @media (max-width: 540px) {
        padding: 2rem 0.8rem 2rem 0.8rem;
    }
`
export const CtaSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 5rem 1.5rem 5rem;
    margin: 1.5rem 0rem 1.5rem 0rem;
    height: auto;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${image});
    background-position: center center;

    @media (max-width: 1080px) {
    padding: 1.5rem;
    }

    @media (max-width: 540px) {
        padding: 2rem 0.8rem 2rem 0.8rem;
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

export default function Betwinner() {
    document.title = `betwinner | code promo 5511`

    return (
        <>
            <NavBar />
            <HeroSection >
                <Hero page='BetWinner' path="https://bwredir.com/1Vxl?extid=1betwin&s1=Cp" description="Betwinner est un bookmaker de nouvelle génération qui opère depuis 2018. Le site officiel, aux couleurs agréables, dispose d'une interface utilisateur moderne et compréhensible." />
            </HeroSection>
            <Features />
            <VideoSection video={video} page="BetWinner" />
            <CtaSection>
                <Badge path='https://bwredir.com/1Vxl?extid=1betwin&s1=Cp' accroche="👋 Bonjour l'équipe, je vous retrouve pour notre nouveau tutoriel d'inscription qui vous permettra de parier sur BETWINNER et de profiter des meilleures cotes, quel que soit votre pays de résidence. Je vous invite à bien faire attention, car l'inscription ne prend même pas 10 minutes, 10 minutes qui seront très bien investies et rentables à long terme. Le bonus pour les nouveaux membres (jusqu'à 100€), ainsi que l'assistance 24h/24 font de BETWINNER l'un des meilleurs jeunes bookmakers du marché. Utilisez notre code promotionnel 5511 pour recevoir le bonus dès aujourd'hui.✊💪" page='BetWinner' />
            </CtaSection>
            <Cta />
            <Footer />
            <BottomMenuSection>
                <BottomNavBar />
            </BottomMenuSection>
        </>
    )
}