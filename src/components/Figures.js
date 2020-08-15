import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Fig from './Figure'

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
        <ListGroup>
            {figures.map(figure => {
                return (
                    <ListGroup.Item>
                        <Fig figure={figure}/>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default Figures;