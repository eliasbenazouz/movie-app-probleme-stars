import React from 'react'
import MovieCard from './MovieCard';
import './MovieList.css'


function MovieList(props) {        
    return (
        <div className="movieList__container">
            {props.movies.map((el,i)=>{return <MovieCard title={props.movies[i].title} description={props.movies[i].description} posterUrl={props.movies[i].posterUrl} rate={props.movies[i].rate} key={props.movies[i].key}/>} )}
        </div>
    )
}

export default MovieList
