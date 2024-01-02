import React from 'react';

function Highlight() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {highlightData.map((highlight, index) => (
          <div
            key={index}
            className="group transition duration-300 ease-in-out transform hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="text-white  rounded-lg shadow-lg overflow-hidden glow-on-hover">
              <div className="p-6 h-72 flex flex-col items-center">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-2xl font-bold">{highlight.title}</h3>
              </div>
              <div className="absolute bottom-0 bg-amber-500 p-6 rounded-lg shadow-md text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-xl font-bold text-gray-600">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const highlightData = [
  {
    icon: '🚀',
    title: 'Pitch Your Idea',
    description: 'Showcase your entrepreneurial prowess in front of esteemed judges.',
  },
  {
    icon: '💰',
    title: 'Win Exciting Prizes',
    description: 'Revealed soon – stay tuned for the big announcement!',
  },
  {
    icon: '🌐',
    title: 'Networking',
    description: 'Connect with like-minded individuals and potential investors.',
  },
  {
    icon: '✨',
    title: 'Chance To Get Incubated',
    description: 'Your innovative idea could be the next success story with our incubation opportunities.',
  },
  {
    icon: '👏',
    title: 'Investors Introduction',
    description: 'Seize the opportunity to be introduced to potential investors.',
  },
];

export default Highlight;
