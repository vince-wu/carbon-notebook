import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Result from './Result'

function ResultsList ({ samples }) {
    console.log('ResultsList', samples)
    return (
        <ListGroup variant="flush">
            {samples.map(sample => {
                return (
                    <ListGroup.Item>
                        <Result sample={sample}/>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default ResultsList