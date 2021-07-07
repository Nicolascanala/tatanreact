import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import styled from 'styled-components'
import Flora from './components/Flora'
import Paisajes from './components/Paisajes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'
import Sesiones from './components/Sesiones'
import Tarifas from './components/Tarifas'
import Contacto from './components/Contacto'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router history={History}>
    <Wrapper>
      <NavBar />
        <Switch>
        <Route exact path='/'>
            <Flora open={open} setOpen={setOpen}/>
        </Route>
        <Route path='/paisajes'>
          <Paisajes />
        </Route>
        <Route path='/sesiones'>
          <Sesiones />
        </Route>
        <Route path='/tarifas'>
          <Tarifas />
        </Route>
        <Route path='/contacto'>
          <Contacto />
        </Route>
        </Switch>
      <Footer />
    </Wrapper>
    </Router>
  );
}

export default App;
