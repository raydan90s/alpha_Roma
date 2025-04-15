import React from "react";
interface InstallationServiceProps {
    eyebrow: string;
    headline: string;
    body: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string; 
    altText: string;
}

const InstallationService: React.FC<InstallationServiceProps> = ({
    eyebrow,
    headline,
    body,
    buttonText,
    buttonLink,
    imageUrl,
    altText,
}) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Dark overlay for better text readability */}
            </div>
            <div className="relative p-8 md:p-16 text-center text-white flex flex-col justify-center items-center h-full">
                {eyebrow && (
                    <h6 className="uppercase text-sm font-semibold tracking-wider mb-2">{eyebrow}</h6>
                )}
                {headline && (
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{headline}</h2>
                )}
                {body && (
                    <p className="mb-8 leading-relaxed">{body}</p>
                )}
                {buttonText && buttonLink && (
                    <a
                        href={buttonLink}
                        className="bg-primary hover:bg-primary-700 text-secondary font-bold py-3 px-6 rounded-full transition duration-300"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};

export default InstallationService;