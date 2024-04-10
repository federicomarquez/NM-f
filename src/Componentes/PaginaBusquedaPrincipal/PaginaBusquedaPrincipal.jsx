import Searchbar from 'src/Componentes/Searchbar/Searchbar'
import CardShow from 'src/Componentes/CardShow/CardShow'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'
import { useEffect , useState } from 'react'



const PaginaBusquedaPrincipal = () => {
  const [data, setdata] = useState(null)
  //console.log('fetching data')
  useEffect(() => {
    const fetchData = async () => {
      //console.log('fetching data2')
       const response = await fetch('http://localhost:9000/EspectaculosActivos')
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
    <Nav/>
      <Searchbar showCheckbox={true} />
      <section className="contenedor-cards">
        <div className="columns is-multiline">
          <div className="contenedor-vacio is-one-third"> </div>
          
          {data?.map((item) => 
            <CardShow item={item} key={item.id}></CardShow>
          ) || <p>Cargando...</p>}

          <div className="contenedor-vacio column is-1"> </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default PaginaBusquedaPrincipal
