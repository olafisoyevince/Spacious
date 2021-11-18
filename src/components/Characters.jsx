import React from 'react'
import { characters } from '../components/Data'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CharacterForm from './CharacterForm'
import { IoAdd } from "react-icons/io5";



const Characters = () => {

  const [isAppear, setAppear] = useState(false)
  const [showForm, setshowForm] = useState(false)

  return (
    <Container>
      <div className="d-flex flex-wrap my-3 pt-4 pb-3">
        {
          characters.map(character => {
            return (
              <div className="my-2 mx-2 character-card" onClick={() => setAppear(true)}>
                <div className="character">
                  <img src={character.image} alt="" className="m-auto" />
                </div>

                <div className="p-3">
                  <div className="fw-bold">{character.title}</div>
                  <div className="opacity-50">{character.body}</div>
                </div>
                {isAppear ? <Sidebar /> : ""}
              </div>
            )
          })
        }
      </div>
      <div>
        <Button variant="dark" className="additem" onClick={() => setshowForm(true)}>
          <IoAdd />
        </Button>
        {showForm ? <CharacterForm /> : ""}
      </div>
    </Container>
  )
}


export default Characters
