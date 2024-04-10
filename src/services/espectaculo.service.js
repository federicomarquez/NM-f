import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'


class EspectaculoService {
    async allInstances(campoDeBusqueda) {
        const espectaculosJSON = await axios.get(`${REST_SERVER_URL}/Espectaculos/`,
        { params : {campoDeBusqueda : campoDeBusqueda},
    })
        
        return espectaculosJSON.data
    }

    async create(espectaculo) {
        return axios.post(`${REST_SERVER_URL}/crearEspectaculos`, espectaculo , 
        {headers: { 'Content-Type': 'application/json' }})
        
    }
    async delete(espectaculo) {
        return axios.delete(`${REST_SERVER_URL}/deleteEspectaculo/${espectaculo.id}`, )
    }
    // async update(espectaculo) {)
    //     return axios.put(`${REST_SERVER_URL}/editarEspectaculo/`, espectaculo)
    // }
}

export const espectaculoService = new EspectaculoService()