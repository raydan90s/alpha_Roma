// PriceCard.jsx
import React from "react";

const PriceCard = ({
  id,
  headerColor,
  tagColor,
  tagText,
  iconName,
  planName,
  planTitle,
  price,
  priceAfter,
  features,
  buttonText,
  buttonColor,
  footerText,
}) => {
  return (
    <div id={id} className="bg-gray-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className={`${headerColor} bg-opacity-20 p-4`}>
        {tagText && (
          <div className={`${tagColor} text-black text-sm font-medium py-1 px-3 rounded-full w-fit mb-4`}>
            {tagText}
          </div>
        )}
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 15a7 7 0 110-14 7 7 0 010 14z"/>
            <path d="M10 5a1 1 0 100 2 1 1 0 000-2zm0 3a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1z"/>
          </svg>
          <span className="font-medium">{planName}</span>
        </div>
        <h2 className="text-3xl font-bold">{planTitle}</h2>
        <p className="mt-2">
          {price}
          {priceAfter && (
            <>
              <br />
              <span className="text-sm text-gray-400">{priceAfter}</span>
            </>
          )}
        </p>
      </div>

      {/* Features */}
      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mt-1 mr-3 ${headerColor.replace('bg-', 'text-')}`}>•</div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="p-6 pt-0">
        <button className={`w-full ${buttonColor} text-black font-bold py-3 rounded-full hover:scale-105 transition-transform duration-200`}>
          {buttonText}
        </button>
        {footerText && (
          <p className="text-xs text-gray-400 text-center mt-4">
            {footerText}
          </p>
        )}
      </div>
    </div>
  );
};

export default PriceCard;