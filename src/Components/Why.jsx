import React from "react";
import prizes from "../Assets/prize.svg";
import networking from "../Assets/networking.svg";
import spirit from "../Assets/entrepreneurship.svg";
import investment from "../Assets/investor.svg";
import vision from "../Assets/shocase.svg";
import incubation from "../Assets/incubation.svg";

function Why() {
  return (
    <div className="p-20 ">
      <div className="text-center text-white text-5xl font-bold font-Inter">
        Why Pitch Me 2.0?
      </div>

      <div className="flex flex-row text-white justify-between mt-20">

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={investment} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Investment Opportunity
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={prizes} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Exciting Prizes
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={networking} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Network & Learn
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={spirit} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Entrepreneurial Spirit
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center mb-20">
            <img src={incubation} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Incubation Opportunity
            </div>
          </div>
          <div className="flex flex-col items-center mb-20">
            <img src={vision} alt="" className="w-20" />
            <div className="text-white text-2xl font-bold font-Roboto">
              Showcase Your Vision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
