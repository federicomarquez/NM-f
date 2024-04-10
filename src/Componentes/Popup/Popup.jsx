import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import FechaInput from '../FechasInput/FechasInput'
import { Instalacion } from 'src/dominio/Instalacion'
import { instalacionService } from 'src/services/instalacion.service'
import { espectaculoService } from 'src/services/espectaculo.service'

const Popup = ({refresh}) => {
  const [show, setShow] = useState(false)
  const [instalaciones, setInstalacion] = useState([])
  const [instalacionSeleccionada, setInstalacionSeleccionada] = useState(null)
  const [espectaculo, setEspectaculo] = useState({
    banda: '',
    lugar: '', // id de instalacion
    gira: '',
    costoBanda: 0,
    fechas: [new Date(Date.now()).toISOString().slice(0, 16)],
  })
  const handlePost = async () => {
    try {
      const data = {
        banda: espectaculo.banda,
        lugar: espectaculo.lugar,
        gira: espectaculo.gira,
        costoBanda: espectaculo.costoBanda,
        fechas: espectaculo.fechas.map(fecha => new Date(fecha)),
      }
      console.log('data:', data)
      const response = await espectaculoService.create(data)
      console.log('evento creado:', response.data)
      refresh(true)
      setShow(false)
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  useEffect(() => {
    console.log(espectaculo)
  }, [espectaculo])

  useEffect(() => {
    const buscarInstalacion = async () => {
      const lugares = await instalacionService.allInstances()
      setInstalacion(lugares)
    }
    buscarInstalacion()
    return () => {
      setInstalacion([])
    }
  }, [])

  const handleChangeFechas = (event, index, nuevaFecha) => {
    espectaculo.fechas.splice(index, 1, nuevaFecha)
    setEspectaculo({ ...espectaculo })
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleModalVisibility = () => {
    return show ? 'block' : 'none'
  }

  const addFechaInput = (event) => {
    event.preventDefault()
    espectaculo.fechas.push(new Date(Date.now()).toISOString().slice(0, 16))
    setEspectaculo({ ...espectaculo })
  }

  const removeFechaInput = (index) => {
    espectaculo.fechas.splice(index, 1)
    setEspectaculo({ ...espectaculo })
  }

  const selectInstalacion = (id, event) => {
    event.preventDefault()
    setEspectaculo({ ...espectaculo, lugar: id })
    setInstalacionSeleccionada(id)
  }

  const instalacionElegida = instalaciones.find(
    (instalacion) => instalacion.id === instalacionSeleccionada,
  )

  const handleChange = (event) => {
    setEspectaculo({...espectaculo, [event.target.name] : event.target.value })
  }

  return (
    <>
      <div>
        <button
          className="button  is-danger is-large  "
          onClick={() => setShow(true)}
        >
          <span className="icon is-small is-white is-fixed-bottom-right">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
        {show && (
          <div className="modal" style={{ display: handleModalVisibility() }}>
            <div className="modal-background " onClick={handleClose}></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title ">Agregar Espectaculo:</p>
                <button className="delete" onClick={handleClose}></button>
              </header>
              <section className="modal-card-body">
                <form>
                  <div className="field">
                    <label className="label">Banda</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="banda"
                        placeholder="Ingrese nombre de la banda"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Gira</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="gira"
                        placeholder="Ingrese la nombre de la gira"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Costo de la banda</label>
                    <div className="control">
                      <input
                        className="input"
                        name="costoBanda"
                        type="number"
                        min="0"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Fechas</label>
                    {espectaculo.fechas.length === 0 ? (
                      <>
                        <FechaInput
                          fecha={new Date(Date.now())
                            .toISOString()
                            .slice(0, 16)}
                          index={0}
                          remove={removeFechaInput}
                          change={handleChangeFechas}
                        />
                      </>
                    ) : (
                      <>
                        {espectaculo.fechas.map((item, i) => (
                          <FechaInput
                            index={i}
                            fecha={item}
                            key={i}
                            remove={removeFechaInput}
                            change={handleChangeFechas}
                          />
                        ))}
                      </>
                    )}
                    <button
                      className="button is-small is-danger"
                      onClick={addFechaInput}
                    >
                      <span className="icon is-small is-white is-fixed-bottom-right">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                  </div>
                  <div className="field">
                    <label className="label">Lugar</label>
                    <div className="control">
                      {instalacionElegida && (
                        <input
                          className="input"
                          type="text"
                          value={instalacionElegida.nombre}
                          disabled
                        />
                      )}
                      {instalaciones && (
                        <div className="is-flex ">
                          {instalaciones.map((item) => (
                            <div key={item.id}>
                              <button
                                className="button m-1"
                                onClick={(event) =>
                                  selectInstalacion(item.id, event)
                                }
                              >
                                {item.nombre}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </section>
              <footer className="modal-card-foot">
                <button className="button" onClick={handleClose}>
                  Cancelar
                </button>
                <button className="button is-success" onClick={handlePost}>
                  Agregar
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Popup
