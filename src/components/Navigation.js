import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Popout from './Popout';
import { useHistory } from 'react-router-dom';

import Search from './Search';
import NewRecipeTemplate from './Experiments/NewRecipeTemplate';

function Navigation(){
    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [recipeShow, setRecipeShow] = useState(false);
    const handleRecipeClose = () => setRecipeShow(false);
    const handleRecipeShow = () => setRecipeShow(true);
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Navbar.Brand href="/"> carbon-notebook</Navbar.Brand>
                <Button className="mr-sm-2" onClick={handleShow}>
                    New Sample
                </Button>
                <Button className="mr-sm-2" onClick={handleRecipeShow}>
                    New Experiment
                </Button>
                <NewRecipeTemplate 
                show={recipeShow} handleClose={handleRecipeClose}
                />
                <Popout show={show} handleClose={handleClose}/>

                <Search/>
            </Nav>
        </Navbar>
    )
}

export default Navigation
