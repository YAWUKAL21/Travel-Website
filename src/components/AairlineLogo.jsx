import React from 'react';

const AirlinePartners = () => {
  const airlines = [
    {
      name: 'Jetstar',
      logo: '/jestar.png' // Replace with your actual image path
    },
    {
      name: 'Expedia',
      logo: '/expedia.png'
    },
    {
      name: 'QANTAS',
      logo: 'quantas.png'
    },
    {
      name: 'Alitalia',
      logo: '/litalia.png'
    }
  ];

  return (
    <section className="py-12 bg-gray-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {airlines.map((airline, index) => (
            <div 
              key={index}
              className="flex justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={airline.logo} 
                alt={airline.name}
                className="h-12 object-contain border-none "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners;