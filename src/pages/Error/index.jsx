import { Fragment } from 'react'
import ErrorIllustration from '../../assets/404.svg'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import { Link } from 'react-router-dom'


function Error() {

  const handleReload = (e) => {
    e.preventDefault() 
    window.location.reload()
  }

  return (
    <Fragment>
      <NavBar />
      <div className='container mt-5'>
          <div className="d-flex flex-column align-items-center mt-3">
            <h2 className='display-5 fw-bold text-center'>Oups...</h2>
            <img src={ErrorIllustration} width="100%" height="360px" alt='Error 404'/>
            <Link role="button" className="btn btn-warning w-50 btn-md px-4 m-3 fw-bold" onClick={(e) => handleReload(e)}>Rafraichir la page</Link> 
          </div>
          <Footer />
      </div>
    </Fragment>
  )
}

export default Error