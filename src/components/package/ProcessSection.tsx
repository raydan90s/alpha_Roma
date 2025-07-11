import React from 'react';

interface Step {
    step: string;
    title: string;
    description: string;
}

interface ProcessSectionProps {
    title: string;
    description: string;
    steps: Step[];
    isVisible: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ title, description, steps, isVisible }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-16">
            {/* Header */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{title}</h2>
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-1 bg-blue-600"></div>
                </div>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">{description}</p>
            </div>

            {/* Steps Container */}
            <div className="relative">
                {/* Connecting Line - Hidden on mobile, visible on desktop */}
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300" style={{ 
                    left: 'calc(10% + 32px)', 
                    right: 'calc(10% + 32px)' 
                }}></div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 border-4 border-white shadow-lg">
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default ProcessSection;