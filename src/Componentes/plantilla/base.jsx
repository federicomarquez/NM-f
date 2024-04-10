import Footer from "../Footer/footer"
import Nav from "../Nav/nav"
import { Outlet } from 'react-router-dom'

const Base = () => {
  

  
    return (  
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    )

}

export default Base
