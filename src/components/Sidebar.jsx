import React from 'react'
import character1 from '../images/characters/character-16.png'
import character2 from '../images/characters/character-2.png'
import character3 from '../images/characters/character-3.png'
import character4 from '../images/characters/character-4.png'
import character5 from '../images/characters/character-5.png'
import character6 from '../images/characters/character-6.png'




const Jane = () => {
  return (
    <div>

      <div className="sidebar">
        <div className="alpha-content py-5 px-4">
          <h2 className="sidebar-name">Jane Cooper</h2>
          <p className="sidebar-text">Jane is really a nice person, she's been
            living on Planet Alpha for the last 10 years.
          </p>
          <div className="d-flex">
            <p className="pe-5">Planet<br /><span className="sidebar-no">Alpha</span> </p>
            <p>Friends<br /><span className="sidebar-no">23</span> </p>
          </div>

          <div className="sidebar-details">
            CHARACTERS
          </div>

          <div className="d-flex ">
            <div>
              <img src={character1} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Darlene Robertson </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex py-2">
            <div>
              <img src={character2} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Katheryn Murphy </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src={character3} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Jenny Willson </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={character4} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Arlene McCoy </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={character5} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Darrell Steward </span> <br /> 23 Friends</p>
            </div>
          </div>

          <div className="d-flex ">
            <div>
              <img src={character6} className="person-img my-2 me-3" />
            </div>
            <div className="person-info d-flex justify-content-center align-items-center">
              <p><span className="person-name">Bessie Cooper </span> <br /> 23 Friends</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Jane
