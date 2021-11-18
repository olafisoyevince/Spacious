import React from 'react'
import './index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import NavBar from './components/NavBar'
import Tabs from './components/Tabs'
// import Planets from './components/Planets'



const App = () => {
  return (
    <Container className="p-3">
      <Row >

        <NavBar />
        <Tabs />


      </Row>
    </Container>
  )
}

export default App
