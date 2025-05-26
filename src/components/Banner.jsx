import React from 'react';

const loveMessages = [
  "Your love is the melody my heart always longed to hear — soft, lingering, and unforgettable. 🎵",
  "In your eyes, I find galaxies — not just stars, but entire worlds where I belong. 🌌",
  "Every second with you is a stanza in a never-ending poem I never want to stop writing. ✍️",
  "You are the peace I never knew I needed — a lighthouse in the storm of life. 🌧️❤️",
  "I fell in love with your soul before I even knew your name, like destiny wrote you into my story. ✨",
  "Your voice wraps around me like a favorite song; your laughter, the rhythm that keeps me dancing. 🎶",
  "Time with you bends — minutes feel like moments, yet memories stretch into eternity. ⏳",
  "You rise in my life like the dawn — warm, golden, and impossible to ignore. 🌅",
  "Every heartbeat whispers your name — a rhythm of longing, love, and life. 💓",
  "With you, the world is no longer black and white — it's painted in infinite shades of feeling. 🎨",
  "Your presence is poetry — wordless, wild, and wondrous. 🖋️",
  "You're the answered wish of every silent prayer I sent into the night sky. 🌠",
  "Our love is a road without distance — only endless beauty in the journey. 🛤️",
  "Even in silence, our souls speak — a language only we understand. 🤫❤️",
  "You complete my melody — every breath, a harmony; every glance, a note. 🥁",
  "You are my favorite masterpiece — no museum could ever hold what we have. 🖼️",
  "In every poem I’ve ever penned, I now realize it was always you between the lines. 📖",
  "Even the stars envy you — how effortlessly you illuminate the dark. ✨",
  "You are the place where my heart rests, the home I never want to leave. 🏡",
  "Loving you taught me who I truly am — soft, strong, and infinite. 💕",
];

const Messages = () => {
  return (
    <div id="messages" className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600 drop-shadow-sm">
        Poetic Love Messages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loveMessages.map((message, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <p className="text-white text-base sm:text-lg italic leading-relaxed">
              “{message}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
