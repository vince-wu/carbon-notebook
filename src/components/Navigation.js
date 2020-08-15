import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Popout from './Popout'
import { useHistory } from 'react-router-dom'

function Navigation(){
    const history = useHistory();
    const routeChange = () =>{ 
        let path = '/'; 
        history.push(path);
      }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Navbar.Brand href="/"> carbon-notebook</Navbar.Brand>
                <Button className="mr-sm-2" onClick={handleShow}>
                    New Sample
                </Button>
                <Popout show={show} handleClose={handleClose} setShow={setShow}/>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button 
                        className="mr-sm-2"
                    >Search</Button>
                </Form>
            </Nav>
        </Navbar>
    )
}

export default Navigation
