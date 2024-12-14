// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/grocery.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <h1 className="text-sm md:text-lg lg:text-xl">Dobrodošli</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600 text-center">
          Menar
        </h2>
        <p className="text-xs md:text-sm lg:text-base self-end">
          Radno vreme: 9:00 - 17:00
        </p>
      </div>
      {/* Blago talasasti deo */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100">
        <path
          fill="#e7f9e5"
          d="M-5,60L20,58.7C60,40,120,43,180,37.3C240,32,300,32,360,37.3C420,43,480,53,540,64C600,75,660,85,720,80C780,75,840,53,900,48C960,43,1020,53,1080,69.3C1140,85,1200,107,1260 101.3L1320 96L1440 96L1440 320L1410 320C1380 320 1320 320 1260 320C1200 320 1140 320 1080 320C1020 320 960 320 900 320C840 320 780 320 720 320C660 320 600 320 540 320C480 320 420 320 360 320C300 320 240 320 180 320C120 320 60 320 30 320 0 320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
