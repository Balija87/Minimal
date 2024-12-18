// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-no-repeat bg-top"
      style={{ backgroundImage: "url('/meenar.png')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <h1 className="text-sm md:text-lg lg:text-xl">Dobrodošli</h1>
        <h2 className="text-8xl md:text-4xl lg:text-8xl font-bold text-red-600 text-center relative inline-block">
          <span className="absolute inset-0 text-white border-4 border-white transform scale-110 -z-10"></span>
        </h2>

        <p className="text-xs md:text-sm lg:text-base self-end">
          Radno vreme: 9:00 - 17:00
        </p>
      </div>
      {/* Blago talasasti deo */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100">
        <path
          fill="#e7f9e5"
          d="M-5,60 L20,58.7 C60,40,120,43,180,37.3 C240,32,300,32,360,37.3 C420,43,480,53,540,64 C600,75,660,85,720,80 C780,75,840,53,900,48 C960,43,1020,53,1080,69.3 C1140,85,1200,107,1260,101.3 L1320,96 L1440,96 L1440,320 L1410,320 C1380,320,1320,320,1260,320 C1200,320,1140,320,1080,320 C1020,320,960,320,900,320 C840,320,780,320,720,320 C660,320,600,320,540,320 C480,320,420,320,360,320 C300,320,240,320,180,320 C120,320,60,320,30,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
