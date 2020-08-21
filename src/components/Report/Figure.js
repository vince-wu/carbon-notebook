import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'

function Fig({figure}) {
    console.log(figure)
    return (
        <Figure>
            <Figure.Image
                src={figure}
                width='500'
            />
            <Figure.Caption>
                {figure}
            </Figure.Caption>
        </Figure>
    )
}

export default Fig