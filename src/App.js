import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


const API_KEY = '3e0ff2983607fdcc8476627e4065dfca';

const MyComp = (props) => <h1>{props.data.title}</h1>;


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

                {this.state.recipes.map(recipe => <MyComp key={recipe.recipe_id}  data={recipe}/>)}


            </div>
        );
    }
}

export default App;
