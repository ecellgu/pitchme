import React from "react";
import line from "../Assets/line.png";
import one from "../Assets/one.png";
import two from "../Assets/two.png";
import three from "../Assets/three.png";
import four from "../Assets/four.png";

function Highlight() {
  return (
    <div className="flex flex-col items-center lg:pl-32 lg:pr-32 pl-10 pr-10">
      <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
      <div className="relative">
        <div className="w-auto h-2 bg-gradient-to-t from-yellow-700 via-yellow-600 to-amber-800 mb-4" />
      </div>

      <div className="flex flex-row justify-center mt-[-35px] z-10">
        <div className="items-center text-center mx-4">
          <img src={one} alt="" className="lg:h-60 h-32 z-10 mx-auto" />
          <div className="text-white text-lg font-semibold">Prize Pool</div>
        </div>
        <div className="items-center text-center mx-4">
          <img src={three} alt="" className="lg:h-80 h- z-10 mx-auto" />
          <div className="text-white text-lg font-semibold">Idea Pitch</div>
        </div>
        <div className="items-center text-center mx-4">
          <img src={two} alt="" className="lg:h-60 h-32 z-10 mx-auto" />
          <div className="text-white text-lg font-semibold">Investors Introduction</div>
        </div>
        <div className="items-center text-center mx-4">
          <img src={four} alt="" className="lg:h-80 h-60 z-10 mx-auto" />
          <div className="text-white text-lg font-semibold">Incubation</div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
