import React from "react";
import "./Style.css";

import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className='navBar'>
      <ul>
        <Link to='/Product' style={{textDecoration: "none", color: "white"}}>
          <li>
            <i class='fa fa-cart-arrow-down' aria-hidden='true'></i> Product
          </li>
        </Link>
        <Link to='/Register' style={{textDecoration: "none", color: "white"}}>
          <li>
            <i class='fa fa-user-plus' aria-hidden='true'></i> Register
          </li>
        </Link>
        <Link to='/' style={{textDecoration: "none", color: "white"}}>
          <li>
            <i class='fa fa-sign-in' aria-hidden='true'></i> LOGIN
          </li>
        </Link>
      </ul>
    </div>
  );
}
