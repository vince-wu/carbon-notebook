import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function StepList({stepArr}) {
    console.log('stepArr: ', stepArr)
    return (
        <ListGroup variant='flush'>
        {stepArr.map((step) =>
            <ListGroup.Item>
                {step}
            </ListGroup.Item>
        )}
        </ListGroup>
    )
}

export default StepList;