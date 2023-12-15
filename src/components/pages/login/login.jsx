import { NavLink } from "react-router-dom"
function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="registr">
          <div className="ism">
            <input type="text" name="ism" className="ism" placeholder="ism kiriting ?" />
          </div>
          <div className="familiya">
            <input type="text" name="familiya" className="fam" placeholder="Familiyangizni kirting ?" />
          </div>
          <div className="raqam">
            <input type="number" name="raqam" className="raqam" placeholder="+998 94 007 85 04" />
          </div>
          <div className="email">
            <input type="email" name="email" className="email" placeholder="@gmail.com" />
          </div>
          <li className="tugma"> <NavLink to="/">registr</NavLink></li>

        </div>
      </div>

    </div>
  )
}

export default Login