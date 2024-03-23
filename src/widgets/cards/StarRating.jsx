import React from 'react';

const StarRating = ({ rating }) => {
  const maxRating = 5; // Puedes ajustar esto según la cantidad máxima de estrellas
  const roundedRating = Math.round(rating * 2) / 2; // Redondea la clasificación a la mitad más cercana

  return (
    <div className="flex items-center mt-2">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 0.5; // Cada estrella tiene un valor de 0.5 para permitir medias estrellas
        const isFilled = roundedRating >= starValue;

        return (
          <span
            key={index}
            className={`text-yellow-500 ${isFilled ? 'text-opacity-100' : 'text-opacity-30'} text-2xl`}
          >
            {isFilled ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
