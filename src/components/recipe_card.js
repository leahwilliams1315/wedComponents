import React, { Component } from 'react';


const RecipeCard = (props) =>
    <div className="recipe-card">
        <h1>{props.data.title}</h1>
        <img src={props.image} alt="" className="img"/>

    </div>;





export default RecipeCard;