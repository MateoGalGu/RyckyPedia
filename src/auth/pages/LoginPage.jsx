import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../context/AuthContext";


export const LoginPage = () => {


  const {login} = useContext(AuthContex)

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath =  localStorage.getItem('lastPath') || '/'

    login( 'new user' );


    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container-login p-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary btn-login"
        onClick={ onLogin }
      > 
        Login
      </button>

    </div>
  )
}
