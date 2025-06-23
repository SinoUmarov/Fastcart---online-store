import { useState } from 'react';
import { Star } from 'lucide-react';

function StarRating({ totalStars = 5, value }) {
  const [rating, setRating] = useState(value);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            onClick={() => setRating(starValue)}
            className="focus:outline-none"
          >
            <Star
              className={`w-5 h-5 ${
                starValue <= rating ? 'text-[#FF9017]' : 'text-[#BDC4CD]'
              }`}
              fill={starValue <= rating ? 'currentColor' : 'none'}
            />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
