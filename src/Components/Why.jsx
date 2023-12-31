import React from "react";
import prizes from '../Assets/shocase.svg'
import networking from '../Assets/networking.svg'
import spirit from '../Assets/entrepreneurship.svg'
import investment from '../Assets/investor.svg'
import vision from '../Assets/shocase.svg'

function Why() {
  return (
    <div>
      <div className="text-center text-white text-5xl font-bold font-Inter">
        Why Pitch Me 2.0?
      </div>

      <div className="flex flex-col text-white ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <img src={investment} alt="" />
            <div className="text-white text-xl font-normal font-Roboto">Investment Opportunity</div>
          </div>
          <div>
            <img src={prizes} alt="" />
            <div className="text-white text-xl font-normal font-Roboto">Exciting Prizes</div>
          </div>
          <div>
            <img src={networking} alt="" />
            <div className="text-white text-xl font-normal font-Roboto">Network & Learn</div>
          </div>
        </div>
        <div>
          <div>
            <img src={spirit} alt="" />
            <div className="text-white text-xl font-normal font-Roboto">Entrepreneurial Spirit</div>
          </div>
          <div>
            <img src={vision} alt="" />
            <div className="text-white text-xl font-normal font-Roboto">Showcase Your Vision</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
