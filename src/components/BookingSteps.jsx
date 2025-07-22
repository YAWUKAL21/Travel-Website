import React from 'react';

const BookingSteps = () => {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#DF6951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#DF6951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#DF6951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    }
  ];

  return (
    <section className="px-6 py-16 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column - Steps */}
        <div className="lg:w-1/2">
          <div className="mb-12">
            <span className="text-lg font-bold text-[#DF6951] mb-3 uppercase tracking-wider block">
              Easy and Fast
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#181E4B] mb-6">
              Book Your Next Trip<br />
              In 3 Easy Steps
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#FFF1DA] w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-[#F1A501] font-bold mr-2">{index + 1}</span>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E1D4C] mb-2">{step.title}</h3>
                  <p className="text-[#5E6282]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

   {/* right column */}
  
  <div className="relative max-w-sm bg-white rounded-3xl shadow-lg p-4">
      {/* Main Image */}
      <img
        src="/girl.png"
        alt="Trip to Greece"
        className="w-full h-48 object-cover rounded-2xl"
      />

      {/* Trip Info */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-900">Trip To Greece</h2>
        <p className="text-sm text-gray-500">
          14–29 June <span className="mx-1">|</span> by Robbin Joe
        </p>
      </div>

      {/* Icons */}
      <div className="flex items-left justify-between mt-4 flex-col space-y-3">
        <div className="flex space-x-4">
          <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
            📅
          </button>
          <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
            💬
          </button>
          <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
            📍
          </button>
        </div >
        <p className="text-sm text-gray-500 " >24 people going</p>
      </div>

      {/* Floating Card */}
      <div className="absolute right-0 bottom-40 translate-x-1/4 translate-y-1/4 bg-white shadow-lg rounded-2xl p-4 w-56">
        <div className="flex items-center space-x-3">
          <img
            src="/chrch.png"
            alt="Rome"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs text-gray-500">Ongoing</p>
            <p className="font-medium text-gray-900">Trip to Rome</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">40% completed</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full w-2/5"></div>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="text-purple-500 text-xl">♡</button>
        </div>
      </div>
    </div>


      </div>
    </section>
  );
};

export default BookingSteps;