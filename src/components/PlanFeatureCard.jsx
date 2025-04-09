// src/components/PlanFeatureCard.jsx
import React from "react";

function PlanFeatureCard({ icon, title, features, price, priceAfter, buttonText, buttonColor, footerText }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full text-center">
      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="text-left mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <div className="font-semibold text-lg mb-2">{price}</div>
      {priceAfter && <div className="text-sm text-gray-500 mb-2">{priceAfter}</div>}
      <button className={`bg-${buttonColor} text-white py-2 px-4 rounded mt-4`}>{buttonText}</button>
      {footerText && <p className="text-xs text-gray-500 mt-4">{footerText}</p>}
    </div>
  );
}

export default PlanFeatureCard;