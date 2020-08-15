import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import DeleteSample from './DeleteSample';
import { TrashIcon } from '@primer/octicons-react' 

function Result({sample}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <DeleteSample show={show} handleClose={handleClose} setShow={setShow} sample={sample}/> 
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Link href={'/sample/' + sample.id}><Card.Title>{sample.id}</Card.Title></Card.Link>
                <Card.Subtitle className="mb-2 text-muted">{sample.formula}</Card.Subtitle>
                <Card.Text className='inline'>
                    {sample.description}
                    <Button 
                    className='float-right ml-5'
                    variant='light'
                    size='sm'
                    onClick={handleShow}
                >
                    <TrashIcon/>
                </Button>
                </Card.Text>
            </Card.Body>
        </Card>       
        </div>
    )
}

export default Result