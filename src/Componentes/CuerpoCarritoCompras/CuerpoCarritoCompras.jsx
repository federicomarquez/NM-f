import { useLocation, useNavigate } from 'react-router-dom'
import { EntradaService } from 'src/services/Entrada.service'
import { deleteCarrito, getCarrito } from 'src/util/carrito'

const CuerpoCarritoCompras = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const carrito = getCarrito()
  let precioTotalCarrito = 0

  const handleClick = async () => {

      const entradasBody = []

      carrito.forEach((item) => {
        item.entradas.forEach(x => { 
          if(x.cantidad > 0){
            entradasBody.push({id: parseInt(x.id), cantidad: parseInt(x.cantidad)})
          }
        })
      })

      const body = {
        usuarioId : state.usuario.id,
        entradas : entradasBody
      }

      console.log(body)
      
     const response = await EntradaService.comprarEntradas(body) 

     if(response.response === "success"){
        deleteCarrito()
        navigate("/base/PaginaBusqueda", {state})
     }
     
     
  }

  return (
    <section className="section">
      <div className="title p-1">Carrito de compras</div>
      <section className="contenedor-cards is-5 columns">
        {
          carrito.map(item => {
            const totalPrecio = item.entradas.reduce((a, b) => a + b.precio * b.cantidad, 0)
            const totalCantidad = item.entradas.reduce((a, b) => a + parseInt(b.cantidad), 0)
            precioTotalCarrito += totalPrecio
            return totalCantidad !== 0 &&
                <div className="column m-1" key={item.id}
                  style={{display:'flex', flexDirection:'column', backgroundColor:'white'}}
                >
                <div className="">
                  <figure className=" is-128x128">
                    <img
                      src="../../imagenes/ac-dc-power-uptour.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="" >
                  <div className=''>
                    <p className="title is-6">{item.banda}</p>
                    <p className="title is-6">{item.gira}</p>
                    {item.entradas.map(entrada => 
                      entrada.cantidad > 0? 
                      <p className="title is-6" key={entrada.id}>x{entrada.cantidad} {entrada.sector} 
                      <span> $ {(entrada.precio*entrada.cantidad).toFixed(2)}</span>
                      </p> : 
                      <></>
                    )}
                    <p className="title is-6">x{totalCantidad}</p>
                    <p className="title is-6">${totalPrecio.toFixed(2)}</p>
                  </div>
                </div>
                </div>

            
          })
        }
      </section>
      <hr className="is-thick is-primary" />
      <div className="contenedor-botontes ml-1">
        
        <div className="title">total $ {precioTotalCarrito.toFixed(2)}</div>
        <button onClick={handleClick} className="button is-primary">Aceptar</button>
        <button className="button">Cancelar</button>
      </div>
    </section>
  )
}

export default CuerpoCarritoCompras
