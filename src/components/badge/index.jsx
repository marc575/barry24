

export default function Badge({path, page, accroche}) {
    
    return (
        <>
            <p className="lead text-white text-center pb-3">
                {accroche}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                <a type="button" href={ `${path}` } className="btn btn-primary rounded-5 btn-lg px-4 me-md-2 fw-bold">Inscris-toi sur {page}</a>
            </div>
        </>
    )
}