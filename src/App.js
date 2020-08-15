import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import Report from './components/Report'
import ReportHeader from './components/ReportHeader'


function App() {
  return (
      <main>
          <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route exact path='/sample/:id' component={Report}/>
            <Route component={Error} />
          </Switch>
          </BrowserRouter>  
      </main>
  )
}

export default App;
