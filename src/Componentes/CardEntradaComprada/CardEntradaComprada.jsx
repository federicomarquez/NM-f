
import { useNavigate } from 'react-router-dom'
import { Espectaculo } from './../../dominio/Espectaculo'
import PropTypes from 'prop-types'
//import { Instalacion } from 'src/dominio/Instalacion'

function CardEntradaComprada({ item }) {
  const navigate = useNavigate()


  const excludedRoutes = ['/base/PaginaCarritoCompras', '/base/PaginaPerfilUsuario']

  const handleClick = () => {
    navigate('/base/PaginaDetalleShow?id='+ item.id)
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
            <p className="title is-6">{item.espectaculo.banda}</p>
            <p className="title is-6">{item.espectaculo.lugar.nombre}</p>

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
          {!excludedRoutes.includes(location.pathname) && (<button
              onClick={handleClick}
              className="button is-primary is-small"
            >
              Comprar
            </button>
  )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default CardEntradaComprada
