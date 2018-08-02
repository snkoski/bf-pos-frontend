import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router'
import {newOrderFetch} from '../actions/orders';
import {recipeIngredientFetchData} from '../actions/recipeIngredient';
import {recipeProportionFetchData} from '../actions/recipeProportions';
import {newUsedIngredientFetch} from '../actions/usedIngredients';

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

    this.props.recipeIngredientFetchData(this.state.recipe_id)
    console.log("RED ING", this.props.recipeIngredients);
    this.props.recipeProportionFetchData(this.state.recipe_id)

    console.log("RED ING 2", this.props.recipeIngredients);
    this.props.recipeIngredients.map((ing, index) => {
      this.props.newUsedIngredientFetch({name: ing.name, amount: this.props.recipeProportions[index].amount})
    })
    // this.takeOrder()
    // .then(([one, two, three]) => {console.log("LOG", one, two, three)})
// this.inputUsedIngredients()
  }

  takeOrder = () => {
     Promise.all(this.props.newOrderFetch({customer_id: this.props.customer.id, recipe_id: this.state.recipe_id}), this.props.recipeIngredientFetchData(this.state.recipe_id), this.props.recipeProportionFetchData(this.state.recipe_id)).then(result => { console.log("FIRST", result); return result})
  }
  //
  // takeOrder = () => {
  //   dispatch(this.props.newOrderFetch({customer_id: this.props.customer.id, recipe_id: this.state.recipe_id}))
  //   dispatch(this.props.recipeIngredientFetchData(this.state.recipe_id))
  //   dispatch(this.props.recipeProportionFetchData(this.state.recipe_id))
  // }

  // takeOrder = () => (
  //   (dispatch) => {
  //     this.props.newOrderFetch({customer_id: this.props.customer.id, recipe_id: this.state.recipe_id}).then(() => (
  //       dispatch(this.props.recipeIngredientFetchData(this.state.recipe_id))
  //     )).then(() => (
  //       dispatch(this.props.recipeProportionFetchData(this.state.recipe_id))
  //     ))
  //   }
  // )



  inputUsedIngredients = () => {
    console.log("USED ING", this.props.recipeIngredients);
    console.log("USED PROPORS", this.props.recipeProportions);
  }


  // handleModify = (e) => {
  //   e.preventDefault()
  //   this.props.recipeIngredientFetchData(this.state.recipe_id)
  //   console.log(this.props.recipeIngredients);
  //   this.props.recipeProportionFetchData(this.state.recipe_id)
  // }

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
        <button onClick={this.handleModify}>modify order</button>
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
  return {recipes: state.recipes, orders: state.orders, recipeIngredients: state.recipeIngredients, recipeProportions: state.recipeProportions, usedIngredients: state.usedIngredients};
};

export default withRouter(connect(mapStateToProps, {newOrderFetch, recipeIngredientFetchData, recipeProportionFetchData, newUsedIngredientFetch})(CustomerCard));
