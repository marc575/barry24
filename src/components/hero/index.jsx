

function Hero({description, page, path}) { 
    return (
        <>
            <div className="px-2 mt-5 pt-2 text-center text-white">
                <h1 className="display-5 fw-bold">Code Promo 5511</h1>
                <div className="mx-auto">
                    <p className="lead mb-4">{description}</p>
                    <p className="lead mb-4">Inscrivez-vous sur {page} avec le <span className="fw-bold">Code Promo 5511</span> pour voir et reçevoir les coupons disponibles !</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={ `${path}` } type="button" className="btn btn-primary btn-lg rounded-5 fw-bold px-4 gap-3">S`inscrire sur {page}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero