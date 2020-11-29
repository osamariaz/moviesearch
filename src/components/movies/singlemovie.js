import React from 'react';
import "./movies.css";
import {Card} from 'react-bootstrap';

const singlemovie = (props) => {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                    <Card.Title>{props.moviee.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.moviee.genre}</Card.Subtitle>
                    <Card.Text>{props.moviee.year}</Card.Text>
            </Card.Body>
        </Card>
        </div>
        

    )
}

export default singlemovie
