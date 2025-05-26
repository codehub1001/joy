import React from 'react';

const loveMessages = [
  "Your love is the melody my heart always longed to hear. 🎵",
  "In your eyes, I find galaxies I’d gladly get lost in. 🌌",
  "Each moment with you feels like a line from a timeless poem. ✍️",
  "You're the calm in my chaos, the peace in my storm. 🌧️❤️",
  "I fell in love with your soul before I even touched your skin. ✨",
  "Your voice is my favorite lullaby and your laughter, my favorite song. 🎶",
  "With you, forever feels too short. ⏳",
  "You are the sunrise I never want to sleep through. 🌅",
  "My heart beats your name with every breath. 💓",
  "Your love colors my world in hues I never knew existed. 🎨",
  "You're the poetry my soul has been aching to write. 🖋️",
  "You are the miracle I whispered to the stars for. 🌠",
  "My love for you is a journey with no end. 🛤️",
  "With you, even silence speaks volumes. 🤫❤️",
  "You complete me like rhythm completes a song. 🥁",
  "Our love story is my favorite masterpiece. 🖼️",
  "You're the verse in every poem I’ve ever written. 📖",
  "Even the stars envy how you light up my sky. ✨",
  "You are the home my heart was searching for. 🏡",
  "I love you not just for who you are, but for who I am with you. 💕",
];

const Messages = () => {
  return (
    <div id='messages' className="  max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Poetic Love Messages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loveMessages.map((message, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border-l-4 border-red-500"
          >
            <p className="text-gray-800 text-lg italic">“{message}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
