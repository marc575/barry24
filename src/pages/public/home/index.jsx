import Features from '../../../components/Features';
import Badge from '../../../components/badge';
import Cta from '../../../components/cta';
import Footer from '../../../components/footer';
import Guide from '../../../components/guide';
import Hero from '../../../components/hero';
import NavBar from '../../../components/navbar';

import styled from "styled-components"
import image from "../../../assets/xbet.jpg"
import video from "../../../assets/xbet.mp4"
import VideoSection from '../../../components/videoSection';
import BottomNavBar from '../../../components/bottomNavbar';
import img from '../../../assets/5511.jpg'

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
    margin: 2rem 0;
    height: auto;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${image});
    background-position: center center;

    @media (max-width: 1080px) {
      padding: 2rem 0;
    }
`

const BottomMenuSection = styled.div`
    display: none;

    @media (max-width: 749px) {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
`

function Home() {
  document.title = `1xbet | Code Promo 5511`

  return (
    <>
      <NavBar />
      <HeroSection>
        <Hero code="5511" page='1xbet'  path="https://refpa4293501.top/L?tag=d_264333m_1599c_&site=264333&ad=1599" description="1xBet est actif sur Internet depuis 2011 et accepte les paris sportifs sur la base d`une licence internationale obtenue sur l`île de Curaçao. C`est le premier bookmaker à avoir proposé une aussi bonne sélection de marchés sportifs et le fameux bonus de 200% pour la première recharge." />
      </HeroSection>
      <Features />
      <VideoSection code="5511" video={video} page="1xBet" />
      <Guide />
      <CtaSection>
        <div className="container py-5">
          <Badge path='https://refpa4293501.top/L?tag=d_264333m_1599c_&site=264333&ad=1599' accroche="👋 Les paris sportifs n'ont jamais été aussi pratiques et faciles. Il vous suffit de télécharger l'application 1xBet pour être au cœur du grand jeu ! Pour tous les nouveaux joueurs sur l'application mobile : bonus jusqu'à 65 000 FCFA à l'inscription.  Utilisez notre code promotionnel 5511 officiel pour recevoir le bonus dès aujourd'hui. ✊💪" page='1xBet' />
        </div>
      </CtaSection>
      <Cta img={img}/>
      <Footer code="5511" />
      <BottomMenuSection>
        <BottomNavBar />
      </BottomMenuSection>
    </>
  )
}

export default Home
