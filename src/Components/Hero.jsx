import React from "react";
import register from '../Assets/register.svg'
import guide from '../Assets/guide.svg'
import img1 from '../Assets/hero-1.svg'
import img2 from '../Assets/hero-2.svg'

function Hero() {
  return (
    <div className="relative w-full  flex flex-row  pl-32 pr-20 pt-8">
        <div className="flex flex-col pr-32">
      <div className=" text-white text-6xl font-bold font-Roboto">
        Unleash Your{" "}
        <span className="text-yellow-500 text-6xl font-bold font-Roboto">
          Innovation
        </span>
        , Share Your{" "}
        <span className="text-yellow-500 text-6xl font-bold font-Roboto">
          Vision
        </span>
        , and Ignite the{" "} <br />
        <span className="text-yellow-500 text-6xl font-bold font-Roboto">
          Entrepreneurial
        </span>
        <span className="text-white text-6xl font-bold font-Roboto">
          {" "}
          Spirit!
          <br />
        </span>
      <div className="flex flex-row justify-between pr-20 mt-20">
        <a href="">
            <img src={register} alt="" />
            </a>
            <a href="">
            <img src={guide} alt="" />
            </a>
            </div>
      </div>

      </div>

      <div className="flex flex-col w-full ">
        <div className="flex flex-row mr-auto">
        {/* <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" /> */}
        <img src={img1} alt=""  className="w-80  hover:scale-105 transition-transform duration-300 ease-in-out"/>
        </div>
        <div className="flex flex-row ml-auto">
        {/* <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" /> */}
        <img src={img2} alt=""  className="w-80  hover:scale-105 transition-transform duration-300 ease-in-out mt-5"/>
        </div>
      </div>


      
    </div>
  );
}

export default Hero;
