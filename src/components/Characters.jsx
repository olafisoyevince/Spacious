import React from 'react'
import { characters } from '../components/Data'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Container from 'react-bootstrap/Container'
import CharacterForm from './CharacterForm'




const Characters = () => {

  const [isAppear, setAppear] = useState(false)
  const [value, setValue] = useState({})
  const dynamicFunction = (character) => {
    setAppear(true)
    setValue({ name: character.title })
  }


  return (
    <Container>
      <div className="d-flex flex-wrap my-3 pt-4 pb-3">
        {
          characters.map(character => {
            return (
              <div className="my-2 mx-2 character-card" onClick={() => dynamicFunction(character)} key={character.id}>
                <div className="character">
                  <img src={character.image} alt="" className="m-auto" />
                </div>

                <div className="p-3">
                  <div className="fw-bold">{character.title}</div>
                  <div className="opacity-50">{character.body}</div>
                </div>
                {isAppear ? <Sidebar name={value.name} /> : ""}
              </div>
            )
          })
        }
      </div>
      <CharacterForm />
    </Container>
  )
}


export default Characters
