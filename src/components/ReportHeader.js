import React, { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import {PencilIcon} from '@primer/octicons-react'

import Result from './Result';
import EditSample from './EditSample';

function ReportHeader({sample}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
        <EditSample show={show} handleClose={handleClose} setShow={setShow} sample={sample}/>
        <Card className ='text-center' style={{ width: '100' }}>
            <Card.Body>
                <Card.Title>{sample.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{sample.formula}</Card.Subtitle>
                <Card.Text className='d-inline'>
                    {sample.description}
                    <Button bsSize="xsmall" className='btn-light float-right' onClick={handleShow}>
                        <PencilIcon></PencilIcon> </Button>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>


    )
}

export default ReportHeader;