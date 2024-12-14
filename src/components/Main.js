import React from 'react';
import './Main.css'; // Uvezi CSS fajl za stilizaciju
import ProductList from './ProductList';
import colors from '../colors';

export const Main = ({ workingHours }) => {
  return (
    <div
      className="main-content"
      style={{ backgroundColor: colors.backgroundlight }}
    >
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          TRENUTNO na
        </span>{' '}
        AKCIJI
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-red-400">
        {workingHours}
      </p>
      {/* Sekcija sa slikama u okvirima */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100 justify-centar">
        <ProductList />
      </div>
    </div>
  );
};

export default Main;
