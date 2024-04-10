import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function Searchbar({ showCheckbox }) {
  const [visible, setVisible] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setVisible(!location.pathname.includes('/Paginas/AdminDashboard'))
  }, [location.pathname])

  return (
    <section className="section has-background-white is-small search-container">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="field is-flex is-justify-content-flex-end">
              <div className="control">
                <input
                  className="input search-input"
                  type="text"
                  placeholder="Artista"
                />
              </div>
            </div>
          </div>
          <div className="column is-one-four">
            <div className="field is-flex is-justify-content-center">
              <div className="control">
                <input
                  className="input search-input"
                  type="text"
                  placeholder="Ubicación"
                />
              </div>
            </div>
          </div>

          {visible && showCheckbox && (
            <div className="control p-5">
              <label className="checkbox">
                <input type="checkbox" />
                Con amigos
              </label>
            </div>
          )}

          <div className="column is-one-four p-5">
            <div className="field is-flex is-align-items-flex-end">
              <div className="control search-button p-1">
                <button className="button is-primary is-small">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
Searchbar.propTypes = {
  showCheckbox: PropTypes.bool,
}

export default Searchbar
