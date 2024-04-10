import './CardShowcss.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { Espectaculo } from './../../dominio/Espectaculo'
import PropTypes from 'prop-types'
//import { Instalacion } from 'src/dominio/Instalacion'

function CardShow({ item }) {
  const navigate = useNavigate()
  const {state} = useLocation()

  const excludedRoutes = ['/base/PaginaCarritoCompras', '/base/PaginaPerfilUsuario']

  const handleClick = () => {
    const url = '/base/PaginaDetalleShow?id='+ item.id
    navigate(url, {state})
  }

  return (
    <div className="card column">
      <div className="card-content">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="../../imagenes/ac-dc-power-uptour.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content" >
          <div className=''>
            <p className="title is-6">{item.banda}</p>
            <p className="title is-6">{item.lugar.nombre}</p>

          </div>

    
         
          <div className="tambien-asistiran field is-grouped is-flex is-flex-wrap overflow-x-scroll">
            <p className="is-flex-shrink-0">También asistirán:</p>
            <figure className="image is-32x32 is-flex-shrink-0">
              <img
                className="is-rounded"
                src="../../imagenes/mbappePerfil.jpg"
              />
            </figure>
            <figure className="image is-32x32 is-flex-shrink-0">
              <img
                className="is-rounded"
                src="../../imagenes/mbappePerfil.jpg"
              />
            </figure>
            <figure className="image is-32x32 is-flex-shrink-0">
              <img
                className="is-rounded"
                src="../../imagenes/mbappePerfil.jpg"
              />
            </figure>
          </div> 

          <div className="control search-button p-4 ">
          {!excludedRoutes.includes(location.pathname) && <button
              onClick={handleClick}
              className="button is-primary is-small"
            >
              Comprar
            </button>
  }
          </div>
        </div>
      </div>
    </div>
  )
}
CardShow.propTypes = {
  item: PropTypes.instanceOf(Espectaculo).isRequired,
  isLogged : PropTypes.bool
}
CardShow.defaultProps = {
  isLogged : false
}

export default CardShow
