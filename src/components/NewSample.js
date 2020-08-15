import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'



function NewSample () {
    const [id, setId] = useState('');
    const [formula, setFormula] = useState('');
    const [description, setDescription] = useState('');
    const [starred, setStarred] = useState(false);
    const history = useHistory();
    return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Sample Name</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='sample id'
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Sample Formula</Form.Label>
                        <Form.Control placeholder='chemical formula' 
                            type='text'
                            placeholder='chemical formula'
                            value={formula} 
                            onChange={e => setFormula(e.target.value)}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as='textarea'
                            rows='3'
                            placeholder='Description'
                            value = {description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Star" 
                        checked = {starred}
                        onChange={e => setStarred(e.target.checked)}
                    />
                </Form.Group>
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
                    return
                    }}
                >
                    Submit
                </Button>
            </Form>
    )
}

export default NewSample