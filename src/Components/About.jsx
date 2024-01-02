import React from 'react';
import ReactPlayer from 'react-player';
import video from '../Assets/bg.mp4';

function About() {
  return (
    <div className='lg:p-32 p-10 mt-32 lg:mt-0'>
      <div className="text-center text-white lg:text-5xl text-4xl font-bold font-Roboto">
        About the <span className="text-yellow-500 lg:text-5xl text-4xl font-bold font-Roboto">
          Event
        </span>
      </div>
      <div className="text-center text-white lg:text-3xl text-lg font-normal font-Roboto lg:mt-20 mt-10">
        Welcome to Pitch Me 2.0, Galgotias University's premier pitching competition, proudly organized by the Entrepreneurship Cell. Pitch Me 2.0 stands as a beacon of entrepreneurial spirit. This event is a celebration of innovation, technology, and the transformative power of ideas.
      </div>
      <div className='flex items-center justify-center lg:mt-20 mt-10 rounded-20 overflow-hidden'>
        <div className="lg:w-[60%] rounded-20 ">
          <ReactPlayer
            url={video}
            playing={true}
            controls
            width="100%"
            height="100%"
            
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}

export default About;
