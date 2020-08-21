import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PlusCircleIcon, NoEntryIcon, TrashIcon } from '@primer/octicons-react';


function StepForm({stepNum, setInsert}) {
    return (
        <Card bg='light' className='mb-sm-2'>
        <Card.Header className='pr-0 pt-1 pb-1'>
            Step {stepNum}
            <Button
                className='float-right btn-circle'
                variant='outline'
                size='sm'
            >
                <TrashIcon size={18}/>
            </Button>
        </Card.Header>
        <Card.Body className='pb-0'>
        <Form.Group as={Row}>
            <Col >
                <Form.Control 
                as='textarea'
                placeholder='Experimental details'
                rows='2'

                />
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Col>
            <Button
                className='float-right mr-sm-2'
                variant='secondary'
                size="sm"
            >
                <PlusCircleIcon/> Input
            </Button>
            <Button
                className='float-right mr-sm-2'
                variant='secondary'
                size="sm"
            >
                <PlusCircleIcon/> Table
            </Button>
            <Button
                className='float-right mr-sm-2'
                variant='secondary'
                size="sm"
            >
                <PlusCircleIcon/> Recipe
            </Button>
            </Col>
        </Form.Group>
        </Card.Body>
        <Card.Footer className='p-0'>
            <Button
                className='float-right btn-circle'
                variant='outline'
                size='sm'
                onClick={() => setInsert(stepNum + 1)}
            >
                <PlusCircleIcon size={18}/>
            </Button>
        </Card.Footer>
        </Card>
    )
}

export default StepForm