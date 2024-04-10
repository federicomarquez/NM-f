import CardAdmintBanda from 'src/Componentes/CardAdmintBanda/CardAdmintBanda'
import FechaDeDetalles from 'src/Componentes/FechasDeDetalle/FechasDeDetalle'
import Searchbar from 'src/Componentes/Searchbar/Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Popup from 'src/Componentes/Popup/Popup'
import { useEffect, useState } from 'react'
import { REST_SERVER_URL } from 'src/services/configuration'

const AdminDashboard = () => {
  const [data, setdata] = useState(null)
  const [refresh, setRefresh] = useState (false)

  useEffect(() => {
    const fetchData = async () => {
      //console.log('fetching data2')
      const response = await fetch(REST_SERVER_URL + '/Espectaculo')
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const dataResponse = await response.json()
      setdata(dataResponse)
      //console.log(response)
      //console.log(dataResponse)
    }
    fetchData()
    return () => {
      setdata(null)
    }
  }, [refresh])


  return (
    <>
      <Searchbar showCheckbox={false} />
      <section className="section columns overflow-scroll">
        <div className="column espacio-vacio-izquierda is-1 "></div>
        <div
          className="column espacio-centro is-10 "
          style={{
            height: '20em',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
          }}
        >
          {data?.map((item) => (
            <CardAdmintBanda item={item} key={item.id} refresh={setRefresh}></CardAdmintBanda>
          )) || <p>Cargando...</p>}
        </div>
        <div className="column espacio-vacio-derecho is-1  ">
          <Popup refresh={setRefresh} ></Popup>
        </div>
      </section>
      <hr className="is-thick is-primary is-black "></hr>

      <section className="estadisticas " />
      <div className="contenedor-fechas  ">
        <div className="fechas field is-grouped is-justify-content-center ">
          {/* <button className="button  is-danger is-fixed is-bottom is-right ">
                    <span className="icon is-small is-white ">
                    <FontAwesomeIcon icon={faPlus} />
                    </span>
                </button> */}
        </div>
      </div>

      <section className="estadisticas ">
        <div className="contenedor-fechas  ">
          <div className="fechas field is-grouped is-justify-content-center ">
            <div className="box p-3 m-2  has-background-success-dark has-text-white">
              <div className="data-container">
                <p className="titulo">ventas</p>
                <p className="dato">$1.500.000</p>
              </div>
            </div>
            <div className="box p-3 m-2 has-background-info has-text-white">
              <div className="data-container">
                <p className="titulo">personas en espera</p>
                <p className="dato"> 350 personas</p>
              </div>
            </div>

            <div className="box p-3 m-2 has-background-success has-text-white">
              <div className="data-container">
                <p className="titulo">rentabilidad</p>
                <p className="dato">60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AdminDashboard
