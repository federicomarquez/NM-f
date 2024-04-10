const FechaDeDetalles = ({item}) =>{
    console.log(item)
    const fecha = new Date(item)
    const diaSemana = fecha.getDay()
    const nombreDia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][diaSemana]
    const dia = fecha.getDate()
    const mes = fecha.getMonth() + 1
    const anio = fecha.getFullYear()
    const hora = fecha.getHours()
    const minutos = fecha.getMinutes()
   

    return(
        
        <div className="box p-3 m-2">
        <div className="data-container">
            <p className="day">{nombreDia}</p>
            <p className="date">{dia}/{mes}/{anio}</p>
            
            <p className="time">{hora}:{minutos}</p>
        </div>
    </div>
    )
}
export default FechaDeDetalles
