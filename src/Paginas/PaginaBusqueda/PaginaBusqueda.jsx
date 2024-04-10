import Searchbar from 'src/Componentes/Searchbar/Searchbar'
import CardShow from 'src/Componentes/CardShow/CardShow'
import { useEffect , useState } from 'react'
import { REST_SERVER_URL } from 'src/services/configuration'
import { useLocation, useNavigate } from 'react-router-dom'
import { Espectaculo } from 'src/dominio/Espectaculo'

const PaginaBusqueda = () => {
  const [data, setdata] = useState(null)
  const {state} = useLocation()
  const navigate = useNavigate()

  if(!state) {
    navigate('/')
  }
  //console.log('fetching data')
  useEffect(() => {
    const fetchData = async () => {
      //console.log('fetching data2')
       const response = await fetch(REST_SERVER_URL+'/EspectaculosActivos') 
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const dataResponse = await response.json()
        setdata(dataResponse)
        //console.log(response)
        //console.log(dataResponse)
      }
    fetchData()
    return () => { setdata(null) }
      },[])
  return (
    <>
      <Searchbar showCheckbox={true} />
      <section className="contenedor-cards">
        <div className="columns is-multiline">
          <div className="contenedor-vacio is-one-third"> </div>
          
          {data?.map((item) => 
            <CardShow item={Espectaculo.fromJson(item)} key={item.id} isLogged={true}></CardShow>
          ) || <p>Cargando...</p>}
          
          <div className="contenedor-vacio column is-1"> </div>
        </div>
      </section>
    </>
  )
}
export default PaginaBusqueda
