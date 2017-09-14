import React from 'react'

const CartItems = ({items}) => {
  let itemsList = items.map(item =>
    <div className="collection-item row lighten-3">
      <div className="col s8"> {item.product.name} </div>
      <div className="col s2"> {'$' + item.product.priceInCents / 100} </div>
      <div className="col s2"> {item.quantity} </div>
    </div>
  )

  return (
    <div className="container">
      <h1>Items</h1>
      <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Product</div>
          <div className="col s2">Price</div>
          <div className="col s2">Quantity</div>
        </div>
          {itemsList}
      </div>
    </div>
  )
}


export default CartItems
