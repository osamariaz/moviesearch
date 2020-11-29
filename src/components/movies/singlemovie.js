import React from 'react';
import "./movies.css";
import {Card} from 'react-bootstrap';

const singlemovie = (props) => {
    return (
        
        <Card style={{ width: '18rem',display:'inline-block' }}>
            <Card.Body>
                    <Card.Title>{props.moviee.title}</Card.Title>
                    <Card.Subtitle>{props.moviee.genre}</Card.Subtitle>
                    <Card.Text>{props.moviee.year}</Card.Text>
            </Card.Body>
        </Card>
        

    )
}

export default singlemovie
