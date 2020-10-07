import React from 'react'
import { FaStar } from "react-icons/fa"
import './MovieCard.css'

function MovieCard(props) {

    return (
        <div className="MovieCard">
            <p>Title: {props.title} </p>
            <p>Description: {props.description}</p>
            <img alt="" width="200px" src={props.posterUrl}></img>
            <div>{[...Array(props.rate)].map(el=>{return <FaStar key={Math.random()*1000} color="yellow" /> } )}</div>
        </div>
    )
}

export default MovieCard
