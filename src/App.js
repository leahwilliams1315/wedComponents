import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import RecipeCard from './components/recipe_card';


const API_KEY = '3e0ff2983607fdcc8476627e4065dfca';


class App extends Component {

        state = {
            recipes: []
        };

    componentDidMount(){

        axios.get(`http://food2fork.com/api/search?key=${API_KEY}`)
            .then(response => {
                this.setState({recipes: response.data.recipes})
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Recipe App</h2>
                </div>

                {this.state.recipes.map(recipe => <RecipeCard key={recipe.recipe_id} data={recipe} image={recipe.image_url} />)}


            </div>
        );
    }
}

export default App;
