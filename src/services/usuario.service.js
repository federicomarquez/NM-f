import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'


class UsuarioService {
    async allInstances(campoDeBusqueda) {
        const UsuarioJSON = await axios.get(`${REST_SERVER_URL}/Usuario/`,
        { params : {campoDeBusqueda : campoDeBusqueda},
    })
        
        return UsuarioJSON.data
    }

    async create(usuario) {
        const response = await axios.post(`${REST_SERVER_URL}/NuevoUsuario`, usuario)
        return response.data
    }

    // async update(usuario) {
    //     return axios.put(`${REST_SERVER_URL}/editarUsuario/`, usuario)
    // }

    

}

export const usuarioService = new UsuarioService()