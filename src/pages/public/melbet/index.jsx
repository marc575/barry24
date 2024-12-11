import Cta from "../../../components/cta";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import NavBar from "../../../components/navbar";

import styled from "styled-components"
import image from "../../../assets/melbet.jpg"
import video from "../../../assets/melbet.mp4"
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

export default function Melbet () {
    document.title = `Melbet | Code Promo B5511`

    return (
        <>
            <NavBar />
            <HeroSection>
                <Hero code="B5511" page='MelBet' path="https://bit.ly/3UHxp5a" description="La société de paris Melbet propose une large offre de paris sportifs en ligne." />
            </HeroSection>
            <Features />
            <VideoSection code="B5511" video={video} page="MelBet" />
            <CtaSection>
                <div className="container py-5">
                    <Badge path='https://bit.ly/3UHxp5a' accroche="👋Son offre de bienvenue de 100% jusqu'à 130 euros est considérable ! Il s'agit d'un bonus exclusif offert avec le code promotionnel B5511.✊💪" page='MelBet' />
                </div>
            </CtaSection>
            <Cta img={img} />
            <Footer code="B5511" />
            <BottomMenuSection>
                <BottomNavBar />
            </BottomMenuSection>
        </>
    )
}