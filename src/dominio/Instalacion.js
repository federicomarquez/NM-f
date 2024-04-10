

export class Instalacion {
    constructor() {
        this.nombre = ''
        this.costo = 1
        this.sectores = new Sector()
    }

    static fromJson(InstalacionJSON) {
        const result = Object.assign(new Instalacion(), InstalacionJSON)
        return result
    }

}

class Sector {
    constructor() {
        this.nombre = ''
        this.capacidad = 0
        this.entradasVendidas = []
    }

    static fromJson(SectorJSON) {
        const result = Object.assign(new Sector(), SectorJSON)
        return result
    }
}
