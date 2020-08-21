import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Fig from './Figure';

function Figures ({ sample }) {
    console.log('Figures', sample)
    const [figures, setFigures] = useState([])
    
    useEffect(() => {
        fetch('/api/figures/' + sample).then(res => 
          res.json().then(data => {
            setFigures(data.figures)
          })
        );
      }, [sample])
    return (
        <Container>
            <Row>
            {figures.map(figure => {
                return (
                    <Col xs={6}> 
                        <Fig figure={figure}/>
                    </Col>
                )
            })}
            </Row>
        </Container>
    )
}

export default Figures;