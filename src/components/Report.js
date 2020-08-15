import React, { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'

import Figures from './Figures'
import ReportHeader from './ReportHeader'
import Navigation from './Navigation'

function Report () {
    const params = useParams()
    const [sample, setSample] = useState('none')
    useEffect(() => {
        fetch('/api/sample/'+ params.id).then(res => 
          res.json().then(data => {
            setSample(data.sample)
          })
        );
      }, [])
      console.log('report', sample)
    return (
        <div>
            <Navigation/>
            <ReportHeader sample={sample}/>
            <Figures sample={sample.id}/>
        </div>
    )
}

export default Report;