import React from 'react'
import red from '../Assets/red-logo.svg'
import pitchme from '../Assets/pitchme-b.png'
import twitter from '../Assets/Twitter.svg'
import insta from '../Assets/Instagram.svg'
import linkedin from '../Assets/linkedin.svg'
import mail from '../Assets/mail.svg'

function Footer() {
  return (
    <div className='flex flex-col items-center'>
      <img src={red} alt="" className='lg:w-28 w-20 mb-5' />
      <div className=" text-center text-white lg:text-3xl text-2xl font-semibold font-Roboto">Contact Us</div>
      <div className='flex flex-row gap-10 lg:mt-10 mt-5 mb-5' >
        <a href="https://twitter.com/ecellgu" target='_blank'>
        <img src={twitter} alt="" className='w-8'/>
        </a>
        <a href="https://www.instagram.com/ecell_gu" target='_blank'>
        <img src={insta} alt="" className='w-8'/>
        </a>
        <a href="https://www.linkedin.com/company/88001381/admin/feed/posts/" target='_blank'>
        <img src={linkedin} alt="" className='w-8'/>
        </a>
        <a href="mailto:ecell@galgotiasuniversty.edu.in" target='_blank'>
        <img src={mail} alt="" className='w-8'/>
        </a>
      </div>
      <img src={pitchme} alt=""  />
    </div>
  )
}

export default Footer
