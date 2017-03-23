import React, { Component } from 'react';


const RecipeCard = (props) =>
    <div className="recipe-card">
        <h1>{props.data.title}</h1>
        <a href={props.data.source_url}>
        <img src={props.image} alt="" className="img"/>
        </a>
    </div>;





export default RecipeCard;