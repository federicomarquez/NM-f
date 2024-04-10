import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Usuario } from './../../dominio/Usuario'
import PropTypes from 'prop-types'


function CardAmigo ({item}) {
    
    return(
        <div className="card-amigo column columns is-5 m-1 box">
        <div className="column is-4">
            <figure className="image is-64x64  m-3">
                <img className="is-rounded" src="../../imagenes/fotoDePerfil.jpeg"/>
            </figure>
        </div>
        <div className="card-content column is-7">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4"> {item.usuario} </p>
                    <p className="subtitle is-6">{item.nombreYApellido}</p>
                </div>
            </div>
        </div>
        <div
            className="card-delete-icon  column is-1 is-flex is-justify-content-flex-end is-align-items-flex-end">
            <button className="button is-small is-danger">
                <span className="icon is-small">
                <FontAwesomeIcon icon={faTrash} />
                    
                </span>
            </button>
        </div>
    </div>
    )
}

CardAmigo.propTypes = {
    item: PropTypes.instanceOf(Usuario).isRequired,
    isLogged : PropTypes.bool
  }
  CardAmigo.defaultProps = {
    isLogged : false
  }
export default CardAmigo