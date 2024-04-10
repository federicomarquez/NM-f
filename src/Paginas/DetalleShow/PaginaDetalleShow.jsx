import Comentarios from 'src/Componentes/Comentarios/Comentarios'
import FechaDeDetalles from 'src/Componentes/FechasDeDetalle/FechasDeDetalle'
import InfoBandaConLocalizacion from 'src/Componentes/InfoBandaConLocalizacion/InfoBandaConLocalizacion'
import { useSearchParams } from 'react-router-dom'
import { REST_SERVER_URL } from 'src/services/configuration'
import { useEffect, useState } from 'react'
import CardLocation from 'src/Componentes/cardLocation/cardLocation'
import { useNavigate, useLocation } from 'react-router-dom'
import { Espectaculo } from './../../dominio/Espectaculo'
import PropTypes from 'prop-types'
import { addToCarrito, getCarrito, getEntradasCarrito } from 'src/util/carrito'
import { EntradaService } from 'src/services/Entrada.service'

function PaginaDetalleShow() {
  const [data, setdata] = useState(null)
  const [dataEntradas, setDataEntrada] = useState(null)
  const [search] = useSearchParams()
  const id = search.get('id')
  const navigate = useNavigate()
  const { state } = useLocation()
  const [yaAgregoAlCarrito, setYaAgregoAlCarrito] = useState(false)
  const entradasGuardadas = getEntradasCarrito(id)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(REST_SERVER_URL + '/Espectaculo/' + id)
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }
      const dataResponse = await response.json()
      setdata(dataResponse)

      setDataEntrada( await EntradaService.getByEspectaculoId(id))      
    }
    fetchData()
    return () => {
      setdata(null)
    }
  }, [id])


  const entradas = []
  if (data && dataEntradas) {
      dataEntradas.forEach(item => {
        const entrada = {
          id : item.id,
          sector : item.nombreSector,
          precio : item.precio,
          cantidad : entradasGuardadas ? parseInt(entradasGuardadas.find(x => x.id === item.id).cantidad) : 0
        }
        entradas.push(entrada)
      })
  }

  const handleChange = (sector, cantidad) => {
    entradas.find(item => item.sector === sector).cantidad = cantidad
  }

  // solo cuando el usuario ya agrego algo al carrito
  const llevarAlCarrito = () => {
    navigate('/base/PaginaCarritoCompras',{ state })
  }

  const saveToCarrito = () => {
    addToCarrito(id, data.banda, entradas,data.gira)
    setYaAgregoAlCarrito(true)
  }

  return (
    <>
      <section className="section">
        {data ? <InfoBandaConLocalizacion item={Espectaculo.fromJson(data)} /> : <></>}

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
              </div>
            </div>

            <hr className="is-thick is-primary" />

            <div className="contendor-locaciones">
              { data && dataEntradas &&
              entradas.map((item, i) => 
                {
                  return <CardLocation
                    nombre={item.sector}
                    precio={ parseFloat(item.precio.toFixed(2))}
                    change={handleChange}
                    cantidad={item.cantidad}
                    key={i}
                  ></CardLocation>}
              )}
            </div>
            <div className="contenedor-botontes ml-2">
              {yaAgregoAlCarrito ? 
                <button
                  className="button is-primary is-pulled-right"
                  onClick={llevarAlCarrito}
                >
                  Ir al carrito
                </button>
               : 
                <button
                  className="button is-primary is-pulled-right"
                  onClick={saveToCarrito}
                >
                  Agregar al Pedido
                </button>
              }

              <button className="button is-primary is-outlined is-pulled-right">
                Avisarme la próxima función
              </button>
            </div>
          </div>
        </div>

        <div className="comentarios field is-grouped ">
          {/* <Comentarios />
          <Comentarios />
          <Comentarios /> */}
        </div>
      </section>
    </>
  )
}


export default PaginaDetalleShow
