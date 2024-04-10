// En tu servicio de login (login.service.js)

import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'

const LoginService = {
  async getUsuarioLogin(login) {
    try {
      const response = await axios.post(`${REST_SERVER_URL}/usuarioLogin`, login, {
        headers: { 'Content-Type': 'application/json' }
      })
      return response.data // Suponiendo que un inicio de sesión exitoso devuelve datos de usuario
    } catch (error) {
      console.error('Error de inicio de sesión:', error)
      throw error// Lanza el error para que pueda ser manejado en el componente que llama a esta función
    }
  }
}

export default LoginService


