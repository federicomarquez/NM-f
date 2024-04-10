import { Usuario } from "src/dominio/Usuario"
import PropTypes from 'prop-types'


const PanelUsuario = ({usuario}) => {
 
  const nombreYApellido = usuario.nombreYApellido.split(' ')

 
  return (
    <>
      <div className="box informacion del usuario">
       
          <figure className="image is-64x64 is-rounded text-center ">
            <img
              className="is-rounded "
              src="../../imagenes/fotoDePerfil.jpeg"
              alt="Foto de Perfil"
            />
          </figure>
      

        <form action="/profile" method="post">
          <div className="field">
            <label htmlFor="username" className="label">
            Nombre
            </label>
            <div className="control">
              <input
                type="text"
                name="username"
                className="input"
                value={nombreYApellido[0]}
                required
              />
            </div>
            <label htmlFor="username" className="label">
              Apellido
            </label>
            <div className="control">
              <input
                type="text"
                name="username"
                className="input"
                value={nombreYApellido[1]}
                required
              />
            </div>
            <label htmlFor="username" className="label">
              Fecha de nacimiento
            </label>
            <div className="control">
              <input
                type="date"
                name="date"
                className="input"
                value={usuario.fechaDeNacimiento}
                required
              />
            </div>
          </div>
          <div className="field">
          <label htmlFor="username" className="label">
              Edad 35 Años
            </label>
          <div className="field">
              <div className="control m-2">
                <button type="submit" className="button is-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
         

          </div>
          {/* <div className="field">
           <h1>DNI</h1>
            <div className="control">
              <input
               type="text"
               name="username"
               className="input"
               value="37.245.754"
               required
              />
            </div>
          </div> */}
          <label htmlFor="friends" className="label p-2">
           Crédito $300.000
          </label>
          <div className="control">
           
            <div className="field">
              <div className="control m-2">
                <button type="submit" className="button is-primary">
                  Sumar Crédito
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

PanelUsuario.propTypes = {
  usuario: PropTypes.instanceOf(Usuario).isRequired
}
export default PanelUsuario
