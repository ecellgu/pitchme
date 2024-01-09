import React from 'react';
import img1 from '../Assets/khalid.png'
import img2 from '../Assets/trina.png'
import img3 from '../Assets/bahu.png'
import img4 from '../Assets/vishal.png'

function Guest() {

  return (
    <div className="container mx-auto p-8 text-white mb-20 ">
      <div className="lg:text-5xl text-4xl font-bold text-center mb-4">Our Chief <span className="text-yellow-500 lg:text-5xl text-4xl font-bold font-Roboto mb-10">
          Guest
        </span></div>
     <div className='flex lg:flex-row flex-col justify-between lg:pl-32 lg:pr-32 lg:p-16 gap-20 lg:gap-0'>
        <div className='flex flex-col items-center '>
            <img src={img1} alt="" className='lg:w-52 w-32 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='font-bold text-2xl'>Khalid Wani</div>
            <div className='font-semibold text-lg'>Founder & CEO KWCG</div>
            <div className='font-normal text-sm'>{"("}Investor{")"}</div>
        </div>
        <div className='flex flex-col items-center'>
            <img src={img4} alt="" className='lg:w-52 w-32 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='font-bold text-2xl'>Vishal Gandhi</div>
            <div className='font-semibold text-lg'>Founder and CEO BIORx</div>
            <div className='font-normal text-sm'>{"("}Investor{")"}</div>
        </div>
        <div className='flex flex-col items-center'>
            <img src={img2} alt="" className='lg:w-52 w-32 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='font-bold text-2xl'>Trina Das</div>
            <div className='font-semibold text-lg'>Founder Trinzz</div>
            <div className='font-normal text-sm'>{"("}Speaker{")"}</div>
        </div>
        <div className='flex flex-col items-center'>
            <img src={img3} alt="" className='lg:w-52 w-32 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='font-bold text-2xl'>Bahu</div>
            <div className='font-semibold text-lg'>Angel Investor</div>
            <div className='font-normal text-sm'>{"("}Investor{")"}</div>
        </div>
     </div>

    </div>
  );
}

export default Guest;
