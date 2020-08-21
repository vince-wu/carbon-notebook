import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import DeleteSample from './DeleteSample';

function EditSample({show, handleClose, setShow, sample}) {
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);
    const [id, setId] = useState('');
    const [formula, setFormula] = useState('');
    const [description, setDescription] = useState('');
    const [starred, setStarred] = useState(false);

    useEffect(() => {
        setId(sample.id)
        setFormula(sample.formula)
        setDescription(sample.description)
        setStarred(sample.starred)
    }, [sample])

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Sample</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <div>
                <DeleteSample show={deleteShow} handleClose={handleDeleteClose} setShow={setDeleteShow} sample={sample}/>
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
                                placeholder='Notes'
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
                        variant='secondary'
                        onClick={handleDeleteShow}
                    >
                        Delete Sample
                    </Button>
                    <Button 
                        className = 'float-right'
                        variant="primary" 
                        type="submit"
                        value='Submit'
                        onClick={async () => {
                            const sample = {id, formula, description, starred};
                            const res = await fetch('/api/edit_sample', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(sample)
                            });
        
                            if (res.ok) {
                                console.log('response worked!');
                                setId('');
                                setFormula('');
                        }
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            </Modal.Body>
        </Modal>
    )
}

export default EditSample