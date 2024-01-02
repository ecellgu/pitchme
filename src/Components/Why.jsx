import React from "react";
import prizes from "../Assets/prize.svg";
import networking from "../Assets/networking.svg";
import spirit from "../Assets/entrepreneurship.svg";
import investment from "../Assets/investor.svg";
import vision from "../Assets/shocase.svg";
import incubation from "../Assets/incubation.svg";

function Why() {
  return (
    <div className="lg:p-20 p-10">
      <div className="text-center text-white lg:text-5xl text-4xl font-bold font-Inter" >
        Why <span className="text-yellow-500 lg:text-6xl text-4xl font-bold font-Roboto">
          Pitch Me 2.0?
        </span>
      </div>

      <div className="flex lg:flex-row flex-col text-white justify-between mt-20">

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={investment} alt="" className="lg:w-20 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Investment Opportunity
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={prizes} alt="" className="lg:w-20 w-16 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Exciting Prizes
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={networking} alt="" className="lg:w-20 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Network & Learn
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={spirit} alt="" className="lg:w-20 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Entrepreneurial Spirit
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={incubation} alt="" className="lg:w-20 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Incubation Opportunity
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={vision} alt="" className="lg:w-20 w-16" />
            <div className="text-white text-xl font-bold font-Roboto">
              Showcase Your Vision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
