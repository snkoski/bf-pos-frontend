import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router'
import {newOrderFetch} from '../actions/orders';

class CustomerCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      customer_id: this.props.customer.id,

      recipe_id: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(this.state);
    this.setState({recipe_id: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newOrderFetch({customer_id: this.props.customer.id, recipe_id: this.state.recipe_id})
  }

  render() {
    let customerOrders = this.props.orders.filter(orders => {
      return orders.customer_id === this.props.customer.id
    })
    let customerRecipes = customerOrders.map(order => {
      return this.props.recipes.find(recipe => {
        return recipe.id === order.recipe_id
      })
    })

    console.log("ORDERS", customerOrders);
    console.log("RECIPES", customerRecipes);
    return (<li>
      <h1>Seat {this.props.customer.seat_number}</h1>

      <form onSubmit={this.handleSubmit}>
        <label>Recipe</label>
        <select onChange={this.handleChange} value={this.state.recipe_id} name='destination_id'>

          <option selected="selected">
            -- select a recipe --
          </option>
          {
            this.props.recipes.map((recipe) => {
              return <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
            })
          }
        </select>
        <button type='submit'>place order</button>
      </form>
      <h3>Orders</h3>
      <ul>
        {
          customerRecipes.map(recipe => {
            return <li>{recipe.name}</li>
          })
        }
      </ul>

    </li>)
  }
}

const mapStateToProps = (state) => {
  return {recipes: state.recipes, orders: state.orders};
};

export default withRouter(connect(mapStateToProps, {newOrderFetch})(CustomerCard));
