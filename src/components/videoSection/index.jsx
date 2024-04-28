
export default function VideoSection({page, video}) {

    return (
        <>
        <div className="container pt-3 px-2 my__card rounded-4 mb-2 mt-5">
            <div className="row flex-md-row align-items-center g-5 py-4 p-4">
                <div className="col-md-4 order-first order-md-last">
                    <video className="rounded-4" src={video} alt="" width="100%" height="400px" controls />
                </div>
                <div className="col-md-8 px-md-5 p-md-3 order-last order-md-first">
                    <h2 className="display-6 fw-bold lh-1">Guide en vidéo pour s`inscrire sur {page} avec le CODE PROMO 5511</h2>
                    <p className="lead">Intégrez les meilleures groupes de pronostiques et obtenez les meilleurs coupons pour tous vos futurs paris.</p>
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