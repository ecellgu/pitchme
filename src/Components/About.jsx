import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../Assets/pitchme.mp4';

function About() {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = videoRef.current.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Autoplay the video when the "About" section is in view
      videoRef.current?.player?.play();
    }
  }, [isInView]);

  return (
    <div className='lg:p-32 p-10 mt-40 lg:mt-0' ref={videoRef}>
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
            ref={videoRef}
            url={video}
            playing={isInView} // Autoplay if in view
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
