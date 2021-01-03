import React, {Component} from "react";
import "./Style.css";

export default class Login extends Component {
  render() {
    return (
      <div className='login '>
        <p>LOGIN </p>
        <br />
        <form>
          <div className='form-control'>
            <input className='email' type='email' name='email' placeholder='Email' />
          </div>
          <br />
          <div className='form-control'>
            <input className='password' type='password' name='password' placeholder='Password' />
          </div>
          <br />
          <div className='check'>
            <input className='checkbox' type='checkbox' name='check' /> <span>RememberMe</span> <a>Forgot Password?</a>
          </div>

          <button>Login</button>
          <div className='footer'>
            <p>Don't have an account?</p>{" "}
            <a className='createAccount' href='http://'>
              CREATE NEW ACCOUNT
            </a>
          </div>
        </form>
      </div>
    );
  }
}
