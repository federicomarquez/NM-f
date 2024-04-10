import PropTypes from 'prop-types'
import { Espectaculo } from './../../dominio/Espectaculo'

const InfoBandaConLocalizacion = ({ item }) => {
    console.log(item)
  return (
    <section className="section">
      <div className="info-show">
        <div className="titulo-show">
          <div className="title field is-grouped">
            <div> {item.banda} </div>
          </div>
        </div>
        <div className="datos-show field is-grouped p-2">
          <p className="p-2">
            <i className="fa-solid fa-star"></i>
            4,5 puntos - 15 opiniones
          </p>
          <p className="p-2">
            <i className="fa-solid fa-location-dot"></i>
            {item.lugar.nombre}
          </p>
        
          <p>Geolocalizacion: {item.lugar.ubicacion.ubicacion.x}, {item.lugar.ubicacion.ubicacion.y}</p>
        </div>
      </div>
    </section>
  )
}
InfoBandaConLocalizacion.propTypes = {
  item: PropTypes.instanceOf(Espectaculo).isRequired,
}

export default InfoBandaConLocalizacion
