import React, { useState } from 'react';

const ProductCard = ({ ImgLink, Opis, Name, Cena }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div>
      {!isCardOpen && (
        <div
          className="card w-full cursor-pointer shadow-md"
          onClick={handleToggleCard}
        >
          <figure className="w-full h-64">
            <img
              src={ImgLink}
              alt={Name}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </figure>

          <div
            className="card-body cursor-pointer p-4 text-center"
            onClick={handleToggleCard}
          >
            <h2 className="card-title">{Name}</h2>
            <div className="flex flex-roe">
              <p>{isCardOpen ? Opis : `${Opis.substring(0, 100)}`}</p>
              <div
                className="btn-secondary cursor-pointer hover:bg-slate-100"
                onClick={handleToggleCard}
              >
                ..
              </div>
            </div>
            <div className="card-actions">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
      {isCardOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={handleToggleCard}
            >
              &times;
            </button>
            <img
              src={ImgLink}
              alt={Name}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-center text-2xl mb-4">{Name}</h2>
            <p>{Opis}</p>
            <button className="btn-primary mt-4" onClick={handleToggleCard}>
              Close
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={ImgLink}
              alt={Name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
