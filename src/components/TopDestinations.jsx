import React from 'react';

const TopDestinations = () => {
  const destinations = [
    {
      image: '/italy.png',
      city: 'Rome, Italy',
      price: '$5.42k',
      duration: '10 Days Trip'
    },
    {
      image: '/london.png',
      city: 'London, UK',
      price: '$4.2k',
      duration: '12 Days Trip'
    },
    {
      image: '/Europe.png',
      city: 'Full Europe',
      price: '$15k',
      duration: '28 Days Trip'
    }
  ];

  return (
    <section className="px-6 py-16 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-lg font-bold text-[#DF6951] mb-3 uppercase tracking-wider block">
            Top Selling
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181E4B] mb-4">
            Top Destinations
          </h2>
          <div className="w-16 h-1 bg-[#DF6951] mx-auto"></div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 "
            >
              {/* Destination Image */}
              <div className="h-80 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.city}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Destination Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold">{destination.city}</h3>
                    <p className="text-sm opacity-80">{destination.duration}</p>
                  </div>
                  <span className="text-lg font-bold bg-[#F1A501] text-white px-3 py-1 rounded-md">
                    {destination.price}
                  </span>
                </div>
              </div>

              {/* Hover Book Now Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#DF6951] hover:bg-[#c4563f] text-white font-bold py-3 px-6 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;