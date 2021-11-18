import React from 'react'
import loader from '../images/assets/planet-loader.svg'

const Loader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <img src={loader} />
    </div>
  )
}

export default Loader