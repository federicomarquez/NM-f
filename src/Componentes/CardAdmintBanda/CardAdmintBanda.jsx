import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Espectaculo } from './../../dominio/Espectaculo'
import PropTypes from 'prop-types'
import { espectaculoService } from 'src/services/espectaculo.service'
import { useLocation, useNavigate } from 'react-router-dom'

const CardAdmintBanda = ({item, refresh}) =>{
    console.log(item)
    const navigate = useNavigate()
    const {state} = useLocation()
    const deleteEspectaculo = async () => {
        await espectaculoService.delete(item)
        refresh(true)

        }
        const handleClick = () => {
            const url = '/base/AdminDetalleShow?id='+ item.id
            navigate(url, {state})
          }
       
    return(
        
<>
<div className=" card columns m-5">
                <div className="card-image column is-3">
                    <img src="../../imagenes/ac-dc-power-uptour.png" alt="Imagen del card"/>
                </div>
                <div className="card-content column is-7">
                    <p className="title is-8">{item.banda}</p>
                    <p>{item.lugar.nombre}</p>
                    <p>{item.fechas}</p>
                </div>
                <div className="card-options column is-2">
                    <div className="buttons has-addons">
                        <button onClick={deleteEspectaculo} className="button is-small is-outlined"><FontAwesomeIcon icon={faTrash} /></button>
                        <button className="button is-small is-outlined"><FontAwesomeIcon icon={faPencil} /></button>
                        <button onClick={handleClick} className="button is-small is-primary">Ver Detalle</button>
                    </div>
                </div>
            </div>
</>
    )
}

CardAdmintBanda.propTypes = {
    item: PropTypes.instanceOf(Espectaculo).isRequired
  }

export default CardAdmintBanda