import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'


function DeleteSample({show, handleClose, setShow, sample}) {
    const history = useHistory();
    const routeChange = () =>{ 
        let path = '/'; 
        history.push(path);
        history.go(0)
      }
    const id = sample.id;
    return (
        <Modal dialogClassName='' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Sample</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete sample <b>{sample.id}</b>?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                <Button 
                    variant='danger'
                    onClick={async () => {
                        const res = await fetch('/api/delete_sample', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(id)
                        });
                        if (res.ok) {
                            console.log('redirecting');
                            handleClose()
                            return routeChange()
                        }
                    }}
                >
                    Confirm Deletion
                </Button>
                
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteSample