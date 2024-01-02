import React from 'react'
import logo from '../Assets/PITCH ME 2.svg'
import ecell from '../Assets/ecell-logo.svg'

function Navbar() {
  return (
    <div className=' lg:p-16 pb-10 pt-10   relative'>
      <div className='pl-5 pr-5 items-center'>
        <div className='flex lg:flex-row flex-col-reverse justify-between items-center' >
            <img src={logo} alt="pitchme" className='w-96 ' />
            <img src={ecell} alt="ecell" className='w-32'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
