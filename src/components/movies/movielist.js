import React from 'react';
import Movie from './singlemovie';

const movielist = (props) => {
    return (
        <div>
            {props.movie.map(moviee=>{
                return <Movie key={moviee.genre} moviee={moviee} />
            })}
        </div>
    )
}

export default movielist
