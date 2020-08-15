import React, { useState, useEffect } from 'react';
import ResultsList from './ResultsList';
import NewSample from './NewSample';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation'
function Home() {
  const [samples, setSamples] = useState([])

  useEffect(() => {
    fetch('/api/samples').then(res => 
      res.json().then(data => {
        setSamples(data.samples)
      })
    );
  }, [])
  console.log('Home', samples)
  return (
    <div>
      <Navigation/>
      <Container>
        <hr></hr>
        <Row>
          <ResultsList samples={samples}/>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
