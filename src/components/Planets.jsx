import React from 'react'
import { planets } from '../components/Data'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from 'react-bootstrap'
import { PlanetForm } from './PlanetForm'


const Planets = () => {

  const [isAppear, setAppear] = useState(false)


  return (
    <Container>
      <div className="d-flex flex-wrap my-3 pt-4 pb-3">
        {
          planets.map(planet => {
            return (
              <div className="my-2 mx-3 p-3 planet-card" onClick={() => setAppear(true)}>
                <div className="planet">
                  <img src={planet.image} alt="" className="m-auto" />
                </div>

                <div>
                  <div className="fw-bold">{planet.title}</div>
                  <div className="opacity-50">{planet.body}</div>
                </div>
                {isAppear ? <Sidebar /> : ""}
              </div>
            )
          })
        }
        <PlanetForm />
      </div>


    </Container>


  )
}

export default Planets
