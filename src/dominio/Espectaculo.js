export class Espectaculo {
    constructor() {
        this.banda = ''
        this.lugar = new Instalacion()
        this.gira = ''
        this.costoBanda = 1
        this.estadoRentabilidad = new RentabilidadBaja()
        this.entradasVendidas = []
        this.recaudacion = 0.0
        this.listaDeEspera = []
    }

    static fromJson(EspectaculoJSON) { 
        const result = Object.assign(new Espectaculo(), EspectaculoJSON)
        return result
    }

}

class Instalacion {
    constructor() {
        this.nombre = ''
    }

    static fromJson(InstalacionJSON) {
        const result = Object.assign(new Instalacion(), InstalacionJSON)
        return result
    }

}

class RentabilidadBaja {
    constructor() {
        this.rentabilidad = 0
    }

    static fromJson(RentabilidadBajaJSON) {
        const result = Object.assign(new RentabilidadBaja(), RentabilidadBajaJSON)
        return result
    }

}