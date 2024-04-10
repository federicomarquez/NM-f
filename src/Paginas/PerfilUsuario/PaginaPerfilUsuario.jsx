import { useEffect, useState } from 'react'
import { REST_SERVER_URL } from 'src/services/configuration'

import Comentarios from 'src/Componentes/Comentarios/Comentarios'
import PanelUsuario from 'src/Componentes/PanelUsuario/PanelUsuario'
import CardAmigo from 'src/Componentes/CardAmigo/CardAmigo'
import { useLocation } from 'react-router-dom'
import { Usuario } from 'src/dominio/Usuario'
import CardEntradaComprada from 'src/Componentes/CardEntradaComprada/CardEntradaComprada'

const PaginaPerfilUsuario = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const { state } = useLocation()
  const { usuario } = state

  const handleTabClick = (event, index) => {
    event.preventDefault()
    setActiveTabIndex(index)
  }

  const comentariosUsuario = Object.keys( usuario.comentarios )
  const comentariosFinales = []

  comentariosUsuario.forEach(item => {
    comentariosFinales.push({banda: item, comentario: usuario.comentarios[item]})
  })

  return (
    <>
      {usuario && 
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <PanelUsuario usuario={Usuario.fromJson(usuario)}/>
              </div>
              <div className="tabs-y-contenedor-cards">
                <div className="tabs is-boxed">
                  <ul>
                    <li
                      className={`tab ${activeTabIndex === 0 ? 'is-active' : ''}`}
                      data-tab="entradas-compradas"
                      onClick={(event) => handleTabClick(event, 0)}
                    >
                      <a href="#">Entradas compradas</a>
                    </li>
                    <li
                      className={`tab ${activeTabIndex === 1 ? 'is-active' : ''}`}
                      data-tab="amigos"
                      onClick={(event) => handleTabClick(event, 1)}
                    >
                      <a href="#">Amigos</a>
                    </li>
                    <li
                      className={`tab ${activeTabIndex === 2 ? 'is-active' : ''}`}
                      data-tab="comentarios"
                      onClick={(event) => handleTabClick(event, 2)}
                    >
                      <a href="#">Comentarios</a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content-container">
                  <div
                    className="tab-content"
                    id="entradas-compradas"
                    style={{ display: activeTabIndex === 0 ? 'block' : 'none' }}
                  >
                    <h2 className="title is-5">Entradas compradas</h2>
                    <div className="columns is-multiline">
                      {usuario.compras?.map((item) => 
                        <CardEntradaComprada
                          item={item}
                          key={item.id}
                        ></CardEntradaComprada>
                      ) || <p>Cargando...</p>}
                    </div>
                  </div>
                  <div
                    className="tab-content"
                    id="amigos"
                    style={{ display: activeTabIndex === 1 ? 'block' : 'none' }}
                  >
                    <h2 className="title is-5">Amigos</h2>
                    <div className="columns is-multiline">
                    {usuario.amigos?.map((item) => 
                        <CardAmigo
                          item={item}
                          key={item.id}
                        ></CardAmigo>
                      ) || <p>Cargando...</p>}
                    </div>
                  </div>
                  <div
                    className="tab-content"
                    id="comentarios"
                    style={{ display: activeTabIndex === 2 ? 'block' : 'none' }}
                  >
                    <h2 className="title is-5">Comentarios</h2>
                    <div className="columns is-multiline">
                     {comentariosFinales?.map((item,i) => 
                        <Comentarios
                          comentario={item}
                          key={i}
                        ></Comentarios>
                      ) || <p>Cargando...</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default PaginaPerfilUsuario
