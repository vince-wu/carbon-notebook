import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';


function LinkData ({show, handleClose, setShow}) {
    const [dirPath, setDirPath] = useState('');
    const [scriptPath, setScriptPath] = useState('');
    const [title, setTitle] = useState('');
    const [dataType, setDataType] = useState('');
    const [description, setDescription] = useState('');
    return (
        <Modal show={show} onHide={handleClose} size='md'>
            <Modal.Header closeButton>
                <Modal.Title>Link Data</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <div>
                <Form>
                    <Form.Group>
                            <Form.Label>Path to Data Folder</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='d:/Clement Research/Electrochem/'
                                value = {dirPath}
                                onChange={e => setDirPath(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Path to Associated Script</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='d:/Clement Research/Python Scripts/Electrochem/parse.py'
                                value = {scriptPath}
                                onChange={e => setScriptPath(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col}>
                            <Form.Label>Data Title</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Electrochemistry'
                                value = {title}
                                onChange={e => setTitle(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                            <Form.Label>Data Type</Form.Label>
                            <Form.Control 
                                as="select" 
                                defaultValue="Choose..."
                                value = {dataType}
                                onChange={e => setDataType(e.target.value)}
                            >
                                <option>Image </option>
                                <option>Plot</option>
                                <option>Table</option>
                            </Form.Control>
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
                    <Button 
                        className = 'float-right'
                        variant="primary" 
                        type="submit"
                        value='Submit'
                        onClick={async () => {
                            const link = {dirPath, scriptPath, title, dataType, description};
                            const res = await fetch('/api/add_link', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(link)
                            });
        
                            if (res.ok) {
                                console.log('response worked!');
                        }
                        }}
                    >
                        Add Link
                    </Button>
                </Form>
            </div>
            </Modal.Body>
        </Modal>
    )
}

export default LinkData