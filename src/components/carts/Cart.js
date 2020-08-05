import React, { Component } from "react";

const Cart = function ({ stripeToken }) {
  const items = [
    {
      quantity: 1,
      price: "price_1HCbhDBobhZOjptzwIGLUNYV"
    }
  ]
  return (
    <div>
      <h1>My Cart</h1>
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Image</tr>
          <tr>Quantity</tr>
          <tr>Price</tr>
        </thead>
        <tbody>
          {
            items.map(item =>
              <tr>
                <td>{ item.name }</td>
                <td>{ item.image }</td>
                <td>{ item.price }</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}




export default Cart;
