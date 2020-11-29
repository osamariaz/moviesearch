import React from 'react';
import Movie from './singlemovie';
import {genres} from "/React/movies/src/movies";
import {Button} from "react-bootstrap";


const movielist = (props) => {
    return (
         
     <div>
      {props.movie.map(moviee=>{
                return <Movie  moviee={moviee} />
            })}
        </div>
    )
}

export default movielist
