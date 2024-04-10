import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usuarioService } from 'src/services/usuario.service'
import {
  validateComfirmPassword,
  validatePassword,
  validateText,
} from 'src/util/validations'

const Registro = () => {
  const [formData, setFormData] = useState({
    pwd: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: Date.now(),
    nombreUsuario: '',
    confirPwd: ''
  })

  const [userValid, setUserValid] = useState(false)
  const navigate = useNavigate()
  const createUser = async () => {
    const userData = {
      nombreYApellido: `${formData.nombre} ${formData.apellido}`,
      usuario: formData.nombreUsuario,
      fechaDeNacimiento: formData.fechaNacimiento,
      pwd: formData.pwd
    }
    try {
        const userDataResponse = await usuarioService.create(userData)
        console.log('Usuario autenticado:', userDataResponse)
       
        navigate('/base/PaginaBusqueda', {state : { usuario: userDataResponse.id}})
      } catch (error) {
        // mostrarMensajeError(error, setErrorMessage)
        // setSnackbarOpen(true)
      }
  }

  useEffect(() => {
    setUserValid(validateAllFields())
    console.log("cambio el form")
  }, [formData]) // Se ejecutará cada vez que formData cambie

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const validateAllFields = () => {
    const { pwd, nombre, apellido, fechaNacimiento, nombreUsuario, confirPwd } = formData;
    console.log(formData)
    return (
      validateText(nombre) &&
      validateText(apellido) &&
      validateText(fechaNacimiento) &&
      validateText(nombreUsuario) &&
      validatePassword(pwd) &&
      validateComfirmPassword(pwd, confirPwd)
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Fecha de Nacimiento</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Nombre de Usuario</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="nombreUsuario"
              value={formData.nombreUsuario}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="pwd"
              value={formData.pwd}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirmar contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="confirPwd"
              value={formData.confirPwd}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              onClick={() => createUser()}
              type="button"
              className={!userValid ? "button  is-black" : "button  is-primary"}
              disabled={!userValid}
            >
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Registro
