import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import Planets from './Planets'
import Characters from './Characters'


const Tabs = () => {

  const [willAppear, setWillAppear] = useState(false)

  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href='/home' onClick={() => setWillAppear(false)}>PLANETS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => setWillAppear(true)}>CHARACTERS</Nav.Link>
      </Nav.Item>
      {willAppear ? <Characters /> : <Planets />}
    </Nav>
  )
}

export default Tabs
