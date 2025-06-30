import React from 'react';
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white text-gray-800">
      <h1 className="text-[80px] md:text-[120px] font-bold animate-bounce text-red-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-base md:text-lg max-w-md text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.  
        Let’s get you back to the home page.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#DB4444] hover:bg-[#c33a3a] text-white px-6 py-3 rounded-md font-medium transition duration-300"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default Error;
