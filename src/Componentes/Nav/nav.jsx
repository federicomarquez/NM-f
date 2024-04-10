import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const {state} = location

  const handleClick = () => {
    navigate('/base/PaginaPerfilUsuario',{state})
  }

  const userAdmin =() => {
    if(state.usuario.rol != "ADMINISTRADOR"){
    navigate('/base/PaginaBusqueda',{state})
  }else{
    navigate('/base/AdminDashboard',{state})  
  }
}


  return (
    <nav className="navbar is-primary" role="navigation">
      <div className="navbar-brand">
        <Link to="/base/PaginaBusqueda" className="navbar-item" state={state} >
          Noches Mágicas
        </Link>
      </div>
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              <span className="icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Link to="PaginaCarritoCompras" className="navbar-item" state={state} >
        <span className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </Link>
      { state? <>
      <div onClick={userAdmin}> 
      <a className="navbar-item has-text-centered">
        Home
      </a>
        </div> 
      </> 
      : 
      <Link to="PaginaBusqueda" className="navbar-item has-text-centered" state={state} >
        Home
      </Link>
      }
      
        
    { state?
     <>
      <div onClick={handleClick}>
    <a className="navbar-item is-pulled-right">
    {state.usuario.usuario}
    </a></div> 
  <Link to="/PaginaLogin" className="navbar-item has-text-centered">
        Salir
      </Link>  
      </>
      : <Link to="/PaginaLogin" className="navbar-item has-text-centered">
    Ingresar
    </Link>  
    
 } 
    </nav>
  )
}

Nav.propTypes = {
  showphoto: PropTypes.bool,
}
export default Nav
