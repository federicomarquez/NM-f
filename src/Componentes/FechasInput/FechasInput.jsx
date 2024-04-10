import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import propTypes from 'prop-types'

const FechaInput = ({ fecha, index, remove, change }) => {
  const [date, setDate] = useState(fecha)
  const handleChange = (event) => {
    setDate(event.target.value)
    change(event, index, new Date(date).toISOString().slice(0, 16))
  }

  const deleteInput = (event) => {
    event.preventDefault()
    remove(index)
  }

  return (
    <div className="field is-flex"> 
      <div className="control">
        <input
          className="input"
          value={new Date(date).toISOString().slice(0, 16)}
          type="datetime-local"
          placeholder="Ingrese la fecha del evento"
          onChange={handleChange}
        />
      </div>
      {
        index !== 0 &&  
        <button className="button is-small is-danger" onClick={deleteInput}>
          <span className="icon is-small is-white is-fixed-bottom-right">
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </button>
      }
      
    </div>
  )
}

export default FechaInput
