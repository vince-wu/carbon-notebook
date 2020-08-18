import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import NewSample from './NewSample'

function Popout({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Sample</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewSample/>
            </Modal.Body>
        </Modal>
    )
}

export default Popout