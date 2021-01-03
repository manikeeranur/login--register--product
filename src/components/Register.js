import React, {Component} from "react";
import "./Style.css";
export default class Register extends Component {
  render() {
    return (
      <div className='register '>
        <form onSubmit={this.haldlerButtonClick}>
          <p>REGISTER </p>
          <br />
          <div className='form-control'>
            <input className='name' type='text' name='name' placeholder='Name' />
          </div>

          <div className='form-control'>
            <input className='email' type='email' name='email' placeholder='Email' />
          </div>

          <div className='form-control'>
            <input className='password' type='password' name='password' placeholder='Password' />
          </div>

          <div className='form-control'>
            <input className='mobile' type='text' name='mobile' placeholder='Mobile' />
          </div>

          <button>Register</button>
          <div className='footer'>
            <a href='http://'>Already have an account?</a>
            <a className='createAccount' href='http://'>
              SIGN IN
            </a>
          </div>
        </form>
      </div>
    );
  }
}
