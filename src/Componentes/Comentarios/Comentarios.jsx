import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Usuario } from 'src/dominio/Usuario'
const Comentarios = ({comentario}) =>{
    return (
     
    <div className="column is-one-half p-2 m-2">
    <div className="card">
        <div className="card-content">
           
            <div className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img className="is-rounded" src="../../imagenes/fotoDePerfil.jpeg"
                            alt="Placeholder image"/>
                    </figure>
                </div>
               
                <div className="media-content">
                    <p className="title is-4"></p>
                    <p className="subtitle is-6">{comentario.banda} - Fecha</p>
                </div>
            </div>

           
            <div className="content">
                <div className="tags">
                    <span className="tag is-info">4/5 <FontAwesomeIcon icon={faStar} /></span>
                </div>
            </div>

           
            <div className="content">
                <p>
                    {comentario.comentario}
                </p>
            </div>

           
            <div className="buttons is-right">
                <button className="button is-danger is-small">
                <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    </div>
</div>
    )
}
Comentarios.propTypes = {
    item: PropTypes.instanceOf(Usuario).isRequired,
    isLogged : PropTypes.bool
  }
  Comentarios.defaultProps = {
    isLogged : false
  }
export default Comentarios