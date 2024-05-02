import styled from "styled-components"
import { xbet } from "../../data/xbet"

const GridSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }
`

const GuideSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 6rem 1rem 6rem;

    @media (max-width: 1080px) {
        padding: 1rem 4rem 1rem 4rem;
    }

    @media (max-width: 540px) {
        padding: 1rem 0.8rem 1rem 0.8rem;
    }
`

export default function Guide() {

    return (
        <>
            <GuideSection>
                <div className="px-2">
                    <div className="mx-auto">
                        <p className="lead mb-4">👋 Les paris sportifs n`ont jamais été aussi pratiques et faciles. 
                        Il vous suffit de télécharger l`application 1xBet pour être au cœur du grand jeu ! 
                        Pour tous les nouveaux joueurs sur l`application mobile : bonus jusqu`à 65 000 FCFA à l`inscription.  
                        Utilisez notre <strong>Code Promo 5511 </strong> officiel pour recevoir le bonus dès aujourd`hui. 
                        Suivez le guide d`inscription à 1xbet, qui vous permettra de recevoir tous vos bonus, d`avoir un compte certifié et de profiter des meilleures cotes, quel que soit votre pays de résidence. Je vais vous demander d`être attentif, 10 minutes qui seront très bien investies et rentables à long terme.✊💪</p>
                    </div>
                </div>
                <GridSection>
                    { xbet.map(({id, cover, title, description}) => 
                        <div className="col" key={id}>
                            <div className="card my__card rounded-3">
                                <img src={cover} className="card-img rounded-3" alt="..." />
                                <div className="card-body">
                                    <h5>{title}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </GridSection>
            </GuideSection>
        </>
    )
}