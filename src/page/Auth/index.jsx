import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import Login from "./component/Login"
import Register from "./component/Register"

export default function Auth() {
  const auth = useSelector(state => state.auth)

  if (auth.login) return <Redirect to="/" />

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Login/>
          </div>
          <div className="col-12 col-md-6">
            <Register/>
          </div>
        </div>
      </div>
    </section>
  )
}