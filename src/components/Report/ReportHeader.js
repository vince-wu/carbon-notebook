import React, { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import {PencilIcon} from '@primer/octicons-react'

import Result from '../Result';
import EditSample from '../EditSample';
import LinkData from '../Media/LinkData';

function ReportHeader({sample}) {
    const [show, setShow] = useState(false);
    const [linkShow, setLinkShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLinkClose = () => setLinkShow(false);
    const handleLinkShow = () => setLinkShow(true);
    return(
        <div>
        <EditSample show={show} handleClose={handleClose} setShow={setShow} sample={sample}/>
        <LinkData show={linkShow} handleClose={handleLinkClose} setShow={setLinkShow}/>
        <Card bg='light' style={{ width: '100' }}>
            <Card.Header as='h5'>{sample.id}</Card.Header>
            <Card.Body>
                <Card.Text><b>Chemical Formula:</b> {sample.formula}</Card.Text>
                <Card.Text className='d-inline'>
                    <b>Description: </b>{sample.description}
                    <Button bsSize="xsmall" className='btn-light float-right' onClick={handleShow}>
                        <PencilIcon></PencilIcon> </Button>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className='mr-2' size='sm' variant='secondary' onClick={handleLinkShow}>Link Data</Button>
                <Button className='mr-2' size='sm' variant='secondary'>Run Script</Button>
            </Card.Footer>
        </Card>
        </div>


    )
}

export default ReportHeader;