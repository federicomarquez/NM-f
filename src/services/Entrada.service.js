import axios from 'axios'
import { REST_SERVER_URL } from './configuration.js'

 

class entradaService {
    async allInstances(campoDeBusqueda) {
        const entradasJSON = await axios.get(`${REST_SERVER_URL}/Entradas/`,{ params : {campoDeBusqueda : campoDeBusqueda}},)
        
        return entradasJSON.data
    }


    async getByEspectaculoId(id) {
        const entradasJSON = await axios.get(`${REST_SERVER_URL}/Entrada/espectaculo/${id}`)
        
        return entradasJSON.data
    }

    async comprarEntradas(entradas){
        const response = await axios.post(`${REST_SERVER_URL}/Compra`, entradas)
        return response.data
    }
}

export const EntradaService = new entradaService()


