import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'


class InstalacionService {
    async allInstances(campoDeBusqueda) {
        const InstalacionJSON = await axios.get(`${REST_SERVER_URL}/Instalacion`,
        { params : {campoDeBusqueda : campoDeBusqueda},
    })
        
        return InstalacionJSON.data
    }

    // async create(instalacion) {
    //     return axios.post(`${REST_SERVER_URL}/nuevaInstalacion/`, instalacion)
    // }

    // async update(instalacion) {
    //     return axios.put(`${REST_SERVER_URL}/editarInstalacion/`, instalacion)
    // }





}

export const instalacionService = new InstalacionService()