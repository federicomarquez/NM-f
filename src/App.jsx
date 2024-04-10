import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaCarritoCompras from './Paginas/PaginaCarritoCompras/PaginaCarritoCompras'
import PaginaBusqueda from './Paginas/PaginaBusqueda/PaginaBusqueda'
import Base from './Componentes/plantilla/base'
import PaginaDetalleShow from './Paginas/DetalleShow/PaginaDetalleShow'
import PaginaPerfilUsuario from './Paginas/PerfilUsuario/PaginaPerfilUsuario'
import AdminDetalleShow from './Paginas/AdminDetalleShow/AdminDetalleShow'
import AdminDashboard from './Paginas/AdminDashboard/AdminDashboard'
import PaginaLogin from './Paginas/PaginaLogin/PaginaLogin'
import PaginaBusquedaPrincipal from './Componentes/PaginaBusquedaPrincipal/PaginaBusquedaPrincipal'
import CardShow  from 'src/Componentes/CardShow/CardShow'
import { espectaculoService } from './services/espectaculo.service'
import Popup from './Componentes/Popup/Popup'

  export const dataShow = {
    component: (item) => <CardShow item={item}></CardShow>,
    datosService: async (campoDeBusqueda) => 
      espectaculoService.allInstances(campoDeBusqueda),  
  }
  console.log(dataShow)

function App() {
  
  

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="PaginaLogin" element={<PaginaLogin />} />
          <Route path="/base" element={<Base />}>
            {/* <Route path="Home" element={<PaginaBusqueda />} /> */}
            <Route path="PaginaDetalleShow" element={<PaginaDetalleShow />} />
            <Route path="PaginaCarritoCompras" element={<PaginaCarritoCompras />}           
             
            />
            <Route path="PaginaBusqueda" element={<PaginaBusqueda />} />
            <Route path="PaginaPerfilUsuario" element={<PaginaPerfilUsuario />}
            />
            <Route path="AdminDetalleShow" element={<AdminDetalleShow />} />
            <Route path="AdminDashboard" element={<AdminDashboard />} />

          </Route>

          <Route path="/" element={<PaginaBusquedaPrincipal />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
