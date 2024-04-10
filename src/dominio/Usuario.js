export class Usuario {
    constructor() {
        this.nombreYApellido = ''
        this.fechaDeNacimiento = ''
        this.saldoEnPesos = 10
        this.usuario = ''
        this.pwd = ''
        this.amigos = []
        this.rol = new Rol()
        this.compras = []
        this.aguardandoNuevoEspectaculo = []
        this.comentario = {}
    }
    static fromJson(UsuarioJSON) {
        const result = Object.assign(new Usuario(), UsuarioJSON)
        return result
    }

}

class Rol {
    constructor() {
        this.nombre = ''
    }
    static fromJson(RolJSON) {
        const result = Object.assign(new Rol(), RolJSON)
        return result
    }
}

