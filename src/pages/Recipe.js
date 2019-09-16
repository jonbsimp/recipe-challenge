import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import recipes from '../store/recipes'

class Recipe extends Component {
    constructor(props){
    super(props)
        this.state={
	      recipeId: props.match.params.id
	    }
	  }
	  
	  componentDidUpdate(prevProps){
	 
	    
        if(this.props.match.params.id != prevProps.params.id){
	      this.setState({recipeId: this.props.match.params.id})
	    }
	  }

	  render() {
	    const{ recipeId } = this.state
	    const recipe = recipes.find((r)=> r.id == recipeId)

	    return(
	      <div>
	        {recipe &&
	          <div>
	            <h1>{recipe.name}</h1>
	            <p>{recipe.instructions}</p>
	          </div>
	        }
	      </div>
	    )
	  }
	}

export default Recipe