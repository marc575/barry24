import Cta from "../../../components/cta";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import NavBar from "../../../components/navbar";

import styled from "styled-components"
import image from "../../../assets/win.jpg"
import video from "../../../assets/win.mp4"
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

export default function Win() {
    document.title = `1win | code promo 5511`

    return (
        <>
            <NavBar />
            <HeroSection>
                <Hero page='1Win' path="https://1wtsso.life/#o47h" description="1win est un bookmaker assez récent. La société a été fondée en 2016, jusqu'en 2018 c'était FirstBet.1win accepte des joueurs du monde entier, y compris du continent africain, le site est traduit et adapté en 9 langues, dont le français." />
            </HeroSection>
            <Features />
            <VideoSection video={video} page="1Win"/>
            <CtaSection>
                <Badge path='https://1wtsso.life/#o47h' accroche="👋Le site ne propose pas seulement des paris sportifs et des eSports, mais aussi des jeux de casino, de poker, de loterie et de sport virtuel. Cette entreprise en ligne est populaire, notamment grâce à son généreux bonus sur le premier dépôt de 500%. Utilisez notre code promotionnel 5511 officiel pour recevoir ce bonus dès aujourd'hui.✊💪" page='1Win' />
            </CtaSection>
            <Cta />
            <Footer />
            <BottomMenuSection>
                <BottomNavBar />
            </BottomMenuSection>
        </>
    )
}