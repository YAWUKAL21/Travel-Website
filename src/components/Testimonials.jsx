import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-16 relative">
      
      {/* Left Side: Text */}
      <div className="max-w-md">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          What People Say<br />About Us.
        </h2>
        <div className="flex mt-6 space-x-2">
          <span className="w-2 h-2 rounded-full bg-gray-900"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      {/* Right Side: Testimonial Card */}
      <div className="relative w-full max-w-md">
        
       

        {/* Active Card */}
        <div className="relative z-10 bg-white shadow-xl p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mike Taylor"
              className="w-12 h-12 rounded-full border-2 border-white -mt-10"
            />
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h4 className="text-md font-bold text-gray-900">Mike Taylor</h4>
          <p className="text-sm text-gray-500">Lahore, Pakistan</p>
        </div>
 {/* Background Card */}
        <div className="relative bottom-1 left-6 right-0 bg-white rounded-xl p-6 shadow-md opacity-40 z-0 scale-95 border border-gray-300">
          <h4 className="text-md font-bold text-gray-900 mb-1">Chris Thomas</h4>
          <p className="text-sm text-gray-500">CEO of Red Button</p>
        </div>
        {/* Vertical Arrows */}
        <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
          <ChevronUp className="w-4 h-4 text-gray-300 cursor-pointer" />
          <ChevronDown className="w-4 h-4 text-purple-900 cursor-pointer" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
