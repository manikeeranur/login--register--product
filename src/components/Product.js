import React, {Component} from "react";
import "./Style.css";
export default class Product extends Component {
  render() {
    return (
      <div className='product'>
        <form action='#' method='POST'>
          <p>Product </p>
          <br />
          <div className='form-control'>
            <input className='productName' type='text' name='productName' id='productName' placeholder='Product Name' />
          </div>

          <div className='form-control'>
            <input className='price' type='number' name='price' id='price' min='20' max='200' placeholder='Price' />
          </div>

          <div className='form-control'>
            <input className='category' type='text' name='category' id='category' placeholder='Categories' />
          </div>
          <br />
          <button>ADD Product</button>
        </form>
      </div>
    );
  }
}
