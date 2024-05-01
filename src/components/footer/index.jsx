
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="container mb-5">
                <footer className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-2 my-5 border-top">
                    <div className="col-md-8 order-md-first order-last">
                        <span className="mb-3 mb-md-0 fw-bold text-muted">Copyright © {year} CODE PROMO 5511, par <a className="text-warning fw-bold" href="https://www.linkedin.com/in/marc-tatchou-85891a243">Net98</a></span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex order-md-last order-first">
                        <li className="ms-3"><a className="text-muted" href='https://t.me/bjtfk'><i className="bi bi-telegram"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href='https://wa.me/2250708618478?text=Bonjour%20Mr%2C%20besoin%20de%20coupon%20gratuit%20svp%20%21%20'><i className="bi bi-whatsapp"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href='https://www.facebook.com/profile.php?id=100092585719468&mibextid=ZbWKwL'><i className="bi bi-facebook"></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}