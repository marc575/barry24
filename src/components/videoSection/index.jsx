
export default function VideoSection({page, video, code}) {

    return (
        <>
        <div className="container mt-5">
            <div className="row align-items-center py-4">
                <div className="col-md-4 order-first order-md-last">
                    <video className="rounded-4" src={video} alt="" width="100%" height="400px" controls />
                </div>
                <div className="col-md-8 px-md-5 pt-3 pt-md-0 order-last order-md-first">
                    <h2 className="lead-5 fw-bold lh-1">Guide en vidéo pour s`inscrire sur {page} avec le Code Promo {code}</h2>
                    <p>
                        👋 Les paris sportifs n`ont jamais été aussi pratiques et faciles. 
                        Il vous suffit de télécharger l`application 1xBet pour être au cœur du grand jeu ! 
                        Pour tous les nouveaux joueurs sur l`application mobile : bonus jusqu`à 65 000 FCFA à l`inscription.  
                        Utilisez notre <strong>Code Promo 5511 </strong> officiel pour recevoir le bonus dès aujourd`hui. 
                        Suivez le guide d`inscription à 1xbet, qui vous permettra de recevoir tous vos bonus, d`avoir un compte certifié et de profiter des meilleures cotes, quel que soit votre pays de résidence. Je vais vous demander d`être attentif, 10 minutes qui seront très bien investies et rentables à long terme.✊💪
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-md-3">
                        <a href='https://t.me/bjtfk' type="button" className="btn btn-primary btn-md px-4 me-md-2 fw-bold">Telegram</a>
                        <a href='https://wa.me/2250708618478?text=Bonjour%20Mr%2C%20besoin%20de%20coupon%20gratuit%20svp%20%21%20' type="button" className="btn btn-success btn-md px-4 fw-bold">Whatsapp</a>
                        <a href='https://www.facebook.com/profile.php?id=100092585719468&mibextid=ZbWKwL' type="button" className="btn btn-outline-primary btn-md px-4 fw-bold">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}