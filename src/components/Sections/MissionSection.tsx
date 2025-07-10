import React from "react";

interface MissionSectionProps {
  title?: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

const MissionSection = ({ 
  title = "NUESTRA FILOSOFÍA",
  subtitle = "MISIÓN",
  description,
  imageUrl = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  imageAlt = "Tecnología de Seguridad Avanzada"
}: MissionSectionProps) => {
  return (
    <section id="mision" className="scroll-mt-24 min-h-screen bg-gradient-to-br from-accent to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                {title}
              </div>
              <h2 className="text-7xl font-black text-secondary leading-none tracking-tight">
                {subtitle}
              </h2>
            </div>
            <p className="text-xl text-secondary leading-relaxed font-light max-w-xl text-justify">
              {description}
            </p>
            <div className="pt-4">
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
