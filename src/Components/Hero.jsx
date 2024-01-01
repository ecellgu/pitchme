import React from "react";
import register from '../Assets/register-no.svg'
import guide from '../Assets/guide.svg'

function Hero() {
  return (
    <div className="relative flex flex-row justify-between p-16">
        <div className="flex flex-col">
      <div className="w-[50%] text-white text-5xl font-bold font-Roboto">
        Unleash Your{" "}
        <span className="text-yellow-500 text-5xl font-bold font-Roboto">
          Innovation
        </span>
        , Share Your{" "}
        <span className="text-yellow-500 text-5xl font-bold font-Roboto">
          Vision
        </span>
        , and Ignite the{" "}
        <span className="text-yellow-500 text-5xl font-bold font-Roboto">
          Entrepreneurial
        </span>
        <span className="text-white text-5xl font-bold font-Roboto">
          {" "}
          Spirit!
          <br />
        </span>
      <div className="flex flex-row justify-between mt-10">
        <a href="">
            <img src={register} alt="" />
            </a>
            <a href="">
            <img src={guide} alt="" />
            </a>
            </div>
      </div>

      </div>

      <div className="flex flex-col">
        <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" />
        <div className="w-80 h-40 bg-zinc-300 rounded-lg mt-5" />
      </div>


      
    </div>
  );
}

export default Hero;
