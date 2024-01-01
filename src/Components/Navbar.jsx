import React from 'react'
import logo from '../Assets/PITCH ME 2.svg'
import ecell from '../Assets/ecell-logo.svg'

function Navbar() {
  return (
    <div className='mb-10 p-10 relative'>
      <div className='pl-5 pr-5'>
        <div className='flex flex-row justify-between' >
            <img src={logo} alt="pitchme" className='w-96 ' />
            <img src={ecell} alt="ecell" className='w-32'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
