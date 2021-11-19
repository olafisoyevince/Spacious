import React from 'react'
import { planets } from '../components/Data'
import { useState } from 'react'
import SidebarPlanets from '../components/SidebarPlanets'
import { Container } from 'react-bootstrap'
import { PlanetForm } from './PlanetForm'


const Planets = () => {

  const [isAppear, setAppear] = useState(false)
  const [value, setValue] = useState({})
  const dynamicFunction = (planet) => {
    setAppear(true)
    setValue({ name: planet.title })

  }


  return (
    <Container>
      <div className="d-flex flex-wrap my-3 pt-4 pb-3">
        {
          planets.map(planet => {
            return (
              <div className="my-2 mx-3 p-3 planet-card" onClick={() => dynamicFunction(planet)} key={planet.id}>
                <div className="planet">
                  <img src={planet.image} alt="" className="m-auto" />
                </div>

                <div>
                  <div className="fw-bold">{planet.title}</div>
                  <div className="opacity-50">{planet.body}</div>
                </div>
                {isAppear ? <SidebarPlanets name={value.name} /> : ""}
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
