import React from "react";
import register from '../Assets/register.svg'
import guide from '../Assets/guide.svg'
import img1 from '../Assets/hero-1.svg'
import img2 from '../Assets/hero-2.svg'

function Hero() {
  return (
    <div className="relative w-full  flex lg:flex-row flex-col  lg:pl-32 lg:pr-20 lg:pt-8 items-center">
        <div className="flex flex-col lg:pr-32 pl-5 pr-5 lg:pl-0 lg:text-left text-center">
      <div className=" text-white lg:text-6xl text-3xl font-bold font-Roboto">
        Unleash Your{" "}
        <span className="text-yellow-500 lg:text-6xl text-3xl font-bold font-Roboto">
          Innovation
        </span>
        , Share Your{" "}
        <span className="text-yellow-500 lg:text-6xl text-3xl font-bold font-Roboto">
          Vision
        </span>
        , and Ignite the{" "} <br />
        <span className="text-yellow-500 lg:text-6xl text-3xl font-bold font-Roboto">
          Entrepreneurial
        </span>
        <span className="text-white lg:text-6xl text-3xl font-bold font-Roboto">
          {" "}
          Spirit!
          <br />
        </span>
      <div className="flex flex-row justify-between lg:pr-20 lg:mt-20 mt-10 gap-10">
        <a href="https://bit.ly/pitchme-2" target="_blank">
            <img src={register} alt="" />
            </a>
            <a href="https://docs.google.com/presentation/d/1EYjB-i9UIZNvVgSGxm-LQzkkNYV1-RN22H25tIitwCc/edit?usp=sharing" target="_blank">
            <img src={guide} alt="" />
            </a>
            </div>
      </div>

      </div>

      <div className="flex lg:flex-col flex-row w-full gap-5 lg:gap-0 p-3 mt-10 lg:mt-0 lg:p-0 ">
        <div className="flex lg:flex-row lg:mr-auto">
        {/* <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" /> */}
        <img src={img1} alt=""  className="lg:w-80  hover:scale-105 transition-transform duration-300 ease-in-out"/>
        </div>
        <div className="flex lg:flex-row lg:ml-auto">
        {/* <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" /> */}
        <img src={img2} alt=""  className="lg:w-80  hover:scale-105 transition-transform duration-300 ease-in-out lg:mt-5"/>
        </div>
      </div>


      
    </div>
  );
}

export default Hero;
