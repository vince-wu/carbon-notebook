import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

import StepForm from './StepForm';
import StepList from './StepList';




function NewRecipeTemplate ({show, handleClose}) {
    const [id, setId] = useState('');
    const [formula, setFormula] = useState('');
    const [description, setDescription] = useState('');
    const [starred, setStarred] = useState(false);
    const history = useHistory();
    const [insert, setInsert] = useState(1);
    const [stepArr, setStepArr] = useState([]); 
    
    useEffect(() => {
        console.log('To be inserted: ', insert)
        const stepNum = insert;
        const newArr = [...stepArr];

        newArr.splice(stepNum, 0, <StepForm stepNum={stepNum} setInsert={setInsert}/>);
        setStepArr(newArr);
    }, [insert])

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
                <StepList stepArr={stepArr}/>
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