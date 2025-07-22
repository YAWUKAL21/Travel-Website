import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '/weather.png', 
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do Barton vanity itself do in it.'
    },
    {
      icon: '/plane.png', 
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
      isRecommended: true 
    },
    {
      icon: '/local event.png', 
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
    },
    {
      icon: '/settings.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers'
    }
  ];

  return (
    <section className="px-6 py-13 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-lg font-bold text-[#DF6951] mb-3 uppercase tracking-wider block">
            CATEGORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181E4B] mb-4">
            We Offer Best Services
          </h2>
          <div className="w-16 h-1 bg-[#DF6951] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={"bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative "
                }
            >
             

              {/* Service Icon */}
              <div className="bg-[#FFF1DA] w-20 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-20 h-16 object-contain"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-[#1E1D4C] mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-[#5E6282] text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;