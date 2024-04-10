import Footer from '../Footer/footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginService from 'src/services/login.service'
import { mostrarMensajeError } from 'src/util/error'
import FormularioRegistro from '../FormularioRegistro/FormularioRegistro'

const CuerpoLogin = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const getLoginUser = async () => {
    const loginData = { user: usuario, pass: password }
    try {
      const userData = await LoginService.getUsuarioLogin(loginData)
      console.log('Usuario autenticado:', userData)
      rolUser(userData)
      //navigate('/base/PaginaBusqueda', {state:{usuario:userData}})
    } catch (error) {
      mostrarMensajeError(error, setErrorMessage)
      setSnackbarOpen(true)
    }
  }

  const rolUser = (userData) => {
    if (userData.rol == 'COMPRADOR') {
      localStorage.setItem("carrito",JSON.stringify([]))
      navigate('/base/PaginaBusqueda', { state: { usuario: userData } })
    } else {
      navigate('/base/AdminDashboard', { state: { usuario: userData } })
    }
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="box">
                <h1
                  className="title is-3 has-text-centered"
                  style={{ color: 'black' }}
                >
                  Noches Mágicas
                </h1>
                
                {!showRegisterForm ? 
                <form>
                  <div className="field">
                    <label htmlFor="username" className="label">
                      Usuario
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => setUsuario(event.target.value)}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Usuario"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Contraseña
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        onClick={getLoginUser}
                        type="button"
                        className="button is-primary"
                      >
                        Ingresar
                      </button>
                    </div>
                  </div>
                  {snackbarOpen && 
                    <div className="notification is-danger">
                      <button
                        className="delete"
                        onClick={() => setSnackbarOpen(false)}
                      ></button>
                      {errorMessage}
                    </div>
                  }
                </form>
                :
                <FormularioRegistro/>
                }
                {!showRegisterForm &&
                <div className="field">
                  <div className="control">
                    <a href="#" onClick={() => setShowRegisterForm(true)}>
                      Registrarse
                    </a>
                  </div>
                </div>}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default CuerpoLogin
