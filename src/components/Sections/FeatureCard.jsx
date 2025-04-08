// src/components/FeatureCard.jsx
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;