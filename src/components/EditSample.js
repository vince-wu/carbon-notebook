import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditSampleForm from './EditSampleForm'

function EditSample({show, handleClose, setShow, sample}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Sample</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditSampleForm sample={sample}/>
            </Modal.Body>
        </Modal>
    )
}

export default EditSample