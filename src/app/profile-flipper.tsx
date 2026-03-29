'use client';

import { useState } from 'react';

export default function ProfileFlipper() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="profile-flipper w-40 h-40 mb-4 transition-transform hover:scale-105 active:scale-95"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`profile-flipper-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front: Emoji */}
        <div className="absolute w-full h-full rounded-full shadow-2xl border-4 border-white overflow-hidden [backface-visibility:hidden]">
          <div className="w-full h-full bg-gradient-to-tr from-purple-500 via-purple-400 to-amber-500 flex items-center justify-center text-6xl">
             👨‍💻
          </div>
        </div>
        {/* Back: Photo */}
        <div className="absolute w-full h-full rounded-full shadow-2xl border-4 border-white overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img 
            src="/profile.jpg" 
            alt="Lukman" 
            className="w-full h-full object-cover brightness-110 contrast-105" 
          />
        </div>
      </div>

      <style jsx>{`
        .profile-flipper {
          perspective: 1000px;
          cursor: pointer;
        }
        .profile-flipper-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        @media (hover: hover) {
          .profile-flipper:hover .profile-flipper-inner {
            transform: rotateY(180deg);
          }
        }
        .profile-flipper-inner.flipped {
          transform: rotateY(180deg);
        }
        .profile-front, .profile-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 9999px;
          overflow: hidden;
        }
        .profile-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
