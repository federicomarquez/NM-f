
// const entrada = 
// {
//     id: 0,
//     sector : "",
//     precio : "",
//     cantidad : 0
// }


export const addToCarrito = (id, nombre, entradas, gira) => {
    const store = {
        id : id,
        banda : nombre,
        gira : gira,
        entradas : entradas
    }

    const storage = JSON.parse(localStorage.getItem("carrito")) || []
    const storageFilter = storage.filter((item) => item.id !== id)

    storageFilter.push(store)
    localStorage.setItem("carrito", JSON.stringify(storageFilter))
}

export const getCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

export const getEntradasCarrito = (id) => {
    const storage = JSON.parse(localStorage.getItem("carrito")) || []
    const filter = storage.filter(item => item.id === id)
    return filter.length > 0 ? filter.pop().entradas : null
}

export const deleteCarrito = () => {
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito",JSON.stringify([]))
}