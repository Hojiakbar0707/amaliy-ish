import { NavLink } from "react-router-dom"
 
function Navbar() {
  return (
    <div className="box2">
      <li> <NavLink to= "login">login</NavLink></li>
      <li> <NavLink to= "/">Home</NavLink></li>

    </div>
  )
}

export default Navbar