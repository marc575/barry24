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

export default function Melbet () {
    document.title = `Melbet | Code Promo 5511`

    return (
        <>
            <NavBar />
            <HeroSection>
                <Hero page='MelBet' path="https://refpakrtsb.top/L?tag=d_282807m_18639c_&site=282807&ad=18639" description="La société de paris Melbet propose une large offre de paris sportifs en ligne." />
            </HeroSection>
            <Features />
            <VideoSection video={video} page="MelBet" />
            <CtaSection>
                <Badge path='https://refpakrtsb.top/L?tag=d_282807m_18639c_&site=282807&ad=18639' accroche="👋Son offre de bienvenue de 100% jusqu'à 130 euros est considérable ! Il s'agit d'un bonus exclusif offert avec le code promotionnel ml_170670.✊💪" page='MelBet' />
            </CtaSection>
            <Cta />
            <Footer />
            <BottomMenuSection>
                <BottomNavBar />
            </BottomMenuSection>
        </>
    )
}