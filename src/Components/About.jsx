import React from 'react';
import ReactPlayer from 'react-player';
import video from '../Assets/bg.mp4'

function About() {
  return (
    <div className='lg:p-32 p-10 mt-20 lg:mt-0'>
      <div className="text-center text-white lg:text-5xl text-4xl font-bold font-Roboto">
        About the <span className="text-yellow-500 lg:text-6xl text-4xl font-bold font-Roboto">
          Event
        </span>
      </div>
      <div className="text-center text-white lg:text-3xl text-xl font-normal font-Roboto mt-20">
        Welcome to Pitch Me 2.0, Galgotias University's premier pitching competition, proudly organized by the Entrepreneurship Cell. Pitch Me 2.0 stands as a beacon of entrepreneurial spirit. This event is a celebration of innovation, technology, and the transformative power of ideas.
      </div>
      <div className="mt-10">
        <ReactPlayer
          url={video}
          playing={true} // Set to true to autoplay (disabled by default)
          controls // Show video controls
          width="100%"
          height="100%"
          muted
          loop
        />
      </div>
    </div>
  );
}

export default About;
