import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from "react-router-dom";
import recipes from './store/recipes'
import Recipe from './pages/Recipe'

class App extends Component {
	constructor(props){
	super(props)
		this.state = {
	      recipes: recipes
	    }
	  }
	  render() {
	    const{ recipes } = this.state

	    return (
	      <Router>
	        <div>
	          <nav>
	            <h2>Recipes</h2>
	            <ul>
	              {recipes.map((recipe)=>
	                <li>
	                  <Link to={`/recipe/${recipe.id}`}>
	                    {recipe.name}
	                  </Link>
	                </li>
	              )}
	            </ul>
	          </nav>
	          <Switch>
	          <Route
	              path="/recipe/:id"
	              component={Recipe}
	            />
	          </Switch>
	        </div>
	      </Router>
	    );
	}
}

export default App;
