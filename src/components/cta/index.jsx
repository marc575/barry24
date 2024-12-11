
export default function Cta({img}) {

    return (
        <>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-5 overflow-hidden">
                        <img className="rounded-3" src={img} alt="code promo 1xbet" width="100%" height="400px" />
                    </div>
                    <div className="col-md-7 px-md-5 pt-3 pt-md-0">
                        <h2 className="lead-5 fw-bold lh-1">Rejoignez-nous pour recevoir les meilleurs coupons</h2>
                        <p className="">Intégrez les meilleures groupes de pronostiques et obtenez les meilleurs coupons pour tous vos futurs paris.</p>
                        <div className="d-grid gap-1 d-md-flex justify-content-md-start mb-4 mb-md-3">
                            <a href='https://t.me/bjtfk' type="buttom" className="btn btn-primary btn-md px-4 me-md-2 fw-bold">Telegram</a>
                            <a href='https://wa.me/2250708618478?text=Bonjour%20Mr%2C%20besoin%20de%20coupon%20gratuit%20svp%20%21%20' type="button" className="btn btn-success btn-md px-4 fw-bold">Whatsapp</a>
                            <a href='https://www.facebook.com/profile.php?id=100092585719468&mibextid=ZbWKwL' type="button" className="btn btn-outline-primary btn-md px-4 fw-bold">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}