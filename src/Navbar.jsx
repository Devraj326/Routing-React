import {Link} from "react-router-dom"

function Heading() {
  return (
    <div className="navbar">
     <h3> <Link to="/"> Kalvium ❤️</Link> </h3>
     <ul>
      <li><Link to="/contact">Contacts</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </div>
  )
}

export default Heading