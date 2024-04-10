import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer has-background-primary has-text-centered p-1" >
      <div className="footer-container">
       
        <div className='is-flex is-justify-content-center'>
        <a href="https://www.instagram.com/nochesmagicas/" className="mr-3">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="https://www.facebook.com/nochesmagicas/" className="mr-3">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <p className='has-text-white'>Noches Mágicas - 2024 - Grupo 9 </p>
       
      </div>
      </div>
    </footer>
  )
}

export default Footer
