import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

class AddItem extends Component {

  state = {
    chosenProductId: 0,
    quantity: 0
  }

  render () {
    let optionsList = this.props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)
    return (
      <div>
        <Row>
          <Input s={12}
            type='select'
            label="Choose the product"
            defaultValue='2'
            onChange={(e) => this.setState({chosenProductId: e.target.value})}>
            {optionsList}
          </Input>
        	<Input s={6} label="Quantity" onChange={(e) => this.setState({quantity: e.target.value})}/>
          <Button onClick={() => this.props.itemAdded(this.state)}>Click me</Button>
        </Row>
      </div>
    )
  }
}

export default AddItem;
