import { Espectaculo } from './Espectaculo.js'


export class Entrada {
    constructor() {
        this.numero = 0
        this.ubicacionGeografica = new UbicacionGeografica()
        this.fechaDeEvento = ''
        this.espectaculo = new Espectaculo()
        this.sector = ''
    }

    static fromJson(entradaJSON) {
        const result = Object.assign(new Entrada(), entradaJSON)
        return result
    }

}


class UbicacionGeografica {
    
    constructor(){
        this.latitud = 0
        this.longitud = 0
    }

    static fromJson(UbicacionGeograficaJSON) {
        const result = Object.assign(new UbicacionGeografica(), UbicacionGeograficaJSON)
        return result
    }

}