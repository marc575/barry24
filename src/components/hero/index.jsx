

function Hero({description, page, path, code}) { 
    return (
        <>
            <div className="container mt-5 py-5 text-center text-white">
                <h1 className="display-5 fw-bold">{code}</h1>
                <div className="mx-auto">
                    <p className="lead mb-4">{description}</p>
                    <p className="lead mb-4">Inscrivez-vous sur {page} avec le <span className="fw-bold">Code Promo {code}</span> pour voir et reçevoir les coupons disponibles !</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={ `${path}` } type="button" className="btn btn-primary btn-lg rounded-5 fw-bold px-4 gap-3">Inscris-toi sur {page} avec le code {code}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero