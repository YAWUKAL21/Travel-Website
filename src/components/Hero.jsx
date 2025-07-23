import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 px-6 md:px-16 my-16 " >
      <div className="absolute inset-y-0 top-0 right-0 w-full md:w-[33%] h-[70%] bg-[#FFF1DA] rounded-bl-[2500px] -z-10" />
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h3 className="text-lg font-bold text-[#DF6951] mb-4 uppercase tracking-wider">Best Destinations Around The World</h3>
          <h1 className="text-5xl md:text-6xl font-bold text-[#181E4B] mb-6 leading-tight">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>
          <p className="text-[#5E6282] mb-8 max-w-md leading-relaxed">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#F1A501] text-white px-8 py-4 rounded-md font-medium shadow-lg hover:bg-[#e59400] transition duration-300">
              Find out more
            </button>
            <button className="flex items-center text-[#686D77] font-medium group">
              <span className="bg-white p-4 rounded-full shadow-md mr-4 flex items-center justify-center group-hover:bg-[#DF6951] group-hover:text-white transition duration-300">
                <svg className="w-6 h-6 text-[#DF6951] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
              Play Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src="/women.png" 
            alt="Travel" 
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute -top-8 -left-4 z-10 hidden lg:block">
            <img 
              src="/plane.png" 
              alt="Traveler" 
              className="w-32 h-24 object-contain"
            />
          </div>
           <div className="absolute -top-[-70px] -right-0 z-0 hidden lg:block ">
            <img 
              src="/plane.png" 
              alt="Flying plane" 
              className="w-30 h-22 bg-[#FFF1DA] object-contain opacity-90"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;