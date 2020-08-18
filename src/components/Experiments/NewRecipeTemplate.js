import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

import StepForm from './StepForm';




function NewRecipeTemplate ({show, handleClose}) {
    const [id, setId] = useState('');
    const [formula, setFormula] = useState('');
    const [description, setDescription] = useState('');
    const [starred, setStarred] = useState(false);
    const history = useHistory();
    return (
        <Modal  size='lg' show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
            <Modal.Title>Create Experiment Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Control type='text'
                            placeholder="Experiment Title" 
                        />
                    </Col>
                </Form.Group>
                <StepForm/>
                <Form.Group as={Row}>
                <Col>
                <Button 
                    className = 'float-right'
                    variant="primary" 
                    value='Submit'
                    type='submit'
                    onClick={async () => {
                        const sample = {id, formula, description, starred};
                        const sid = id;
                        const res = await fetch('/api/add_sample', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(sample)
                        });
    
                        if (res.ok) {
                            console.log('response worked!');
                            let path = '/sample/' + sid;
                            console.log('path', path);
                            history.push(path);
                            history.go(0);
                    }
                    }}
                >
                    Submit
                </Button>
                </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        </Modal>
    )
}

export default NewRecipeTemplate