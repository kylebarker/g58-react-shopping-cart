import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart';
let newId = 4;

class App extends Component {
  state = {
    items: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    copyright: 1999
  }

  itemAdded = (item) => {
    console.log('this', item);
    let chosenProduct = this.state.products.filter(product => product.id == item.chosenProductId)[0]
    console.log('chosenProduct', chosenProduct);

    this.setState({
      items: this.state.items.concat({
          id: newId,
          product: chosenProduct,
          quantity: item.quantity
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart
          copyright={this.state.copyright}
          items={this.state.items}
          products={this.state.products}
          itemAdded={this.itemAdded}
        />
      </div>
    );
  }
}

export default App;
