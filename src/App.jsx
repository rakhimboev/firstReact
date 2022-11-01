import React from 'react';
import './App.css';
import Products from './Products/Products';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'

class App extends React.Component {
  render() {
    const products = [
      {id:1, img: img1, name: 'Barberton Daisy', sku: 123456789, price: '119', quantity: ''},
      {id:2, img: img2, name: 'Blushing Bromily', sku: 987654321, price: '139', quantity: '6'},
      {id:3, img: img3, name: 'Aluminum Plants', sku: 123456789, price: '179', quantity: '9'}
    ]

    return (
      <div className="container">
        <div className="header">
          <p>Products</p>
          <div className="ul">
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p></p>
          </div>
        </div>
        {
          products.map(value => {
            return (
              <Products flower={value} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
