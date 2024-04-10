import PropTypes from 'prop-types'
import { useState } from 'react'

const CardLocation = ({nombre, precio, change}) => {

  const [count, setCount] = useState(0)

  const handleChange = (event) => {
    setCount(event.target.value)
    change(nombre, event.target.value)
  }

  return (
    <div className="card-content">
    <div className="columns ">
      <div className="column is-narrow">
        <p>{nombre}</p>
      </div>
      <div className="column has-text-centered">
        <p>$ {precio}</p>
      </div>
      <div className="column is-narrow has-text-right is-2">
        <div className="field has-addons">
          <p className="control">
            <input
              className="input is-small"
              type="number"
              min="0"
              value={count}
              onChange={handleChange}
            />
          </p>
        </div>
      </div>
    </div>
  </div>

  )}

CardLocation.propTypes = {
    nombre : PropTypes.string,
    precio : PropTypes.number
  }

  export default CardLocation
