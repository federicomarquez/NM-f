import InfoBandaConLocalizacion from 'src/Componentes/InfoBandaConLocalizacion/InfoBandaConLocalizacion'
import FechaDeDetalles from 'src/Componentes/FechasDeDetalle/FechasDeDetalle'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { REST_SERVER_URL } from 'src/services/configuration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'




const AdminDetalleShow = () => {
  const [data, setdata] = useState(null)
  const [search] = useSearchParams() 
  const id =search.get("id")
  const navigate = useNavigate()
  const {state} = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      //console.log('fetching data2')
       const response = await fetch(REST_SERVER_URL+'/Espectaculo/'+ id) 
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const dataResponse = await response.json()
        setdata(dataResponse)
        //console.log(response)
        console.log(dataResponse)
      }
    fetchData()

   
    return () => { setdata(null) }
      },[])

      const handleClick = () => {
        const url = '/base/AdminDashboard?id='
        navigate(url, {state})
      }
  return (
    <>
      <section className="section">
      { data?<InfoBandaConLocalizacion item={data}/>:<></>}

        <div className="cuerpo-principal columns">
          <div className="imagen-show column is-one-third">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="../../imagenes/ac-dc-power-uptour.png"
                  alt="Divididos"
                />
              </figure>
            </div>
          </div>

          <div className="contenedor-fechas-locaciones column is-two-thirds  ">
            <div className="contenedor-fechas ">
              <div className="fechas field is-grouped ">
              {data?.fechas.map((item, i) => 
                  <FechaDeDetalles item={item} key={i}></FechaDeDetalles>
                ) || <p>Cargando...</p>}
                <button className="button  is-danger is-small is-vcentered ">
                  <span className="icon is-small is-white">
                    {/* <i className="fas fa-plus"></i> */}
                  </span>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            <div className="contendor-locaciones">
              <div className="columns">
                <div className="column is-narrow is-offset-1">
                  
                  <div className="field is-grouped ">
                    <p className="has-text-weight-bold pr-2">
                      Entradas Vendidas Totales:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold pr-2">
                      Entradas Vendidas platea alta:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold pr-2">
                      Entradas Vendidas palco:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold pr-2">
                      Entradas Vendidas campo:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold pr-2">
                      Recaudacion total:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                  <div className="field is-grouped">
                    <p className="has-text-weight-bold pr-2">
                      Gente en espera:
                    </p>
                    <p className="has-text-weight-light">14.546</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="botones-confirmar-cancelar field is-grouped is-pulled-right">
          <div className="buttons ">
            <button className="button is-primary">Guardar</button>
            <button onClick={handleClick} className="button is-light">Cancelar</button>
          </div>
        </div>
      </section>
    </>
  )
}
export default AdminDetalleShow
