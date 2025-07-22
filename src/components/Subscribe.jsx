import React from 'react';
import { MailIcon, Send } from 'lucide-react';

const SubscribeSection = () => {
  return (
    <section className="relative bg-[#f4f5ff] rounded-[20px] py-12 px-6 sm:px-12 max-w-5xl mx-auto mt-12 overflow-hidden">
      {/* Top-right send icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-[#5e3bea] rounded-full flex items-center justify-center z-10">
        <Send size={18} className="text-white" />
      </div>

      {/* Left decoration SVG */}
      <svg
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-48 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="30" stroke="#5E3BEA" strokeWidth="0.5" />
      </svg>

      {/* Right decoration SVG */}
      <svg
        className="absolute right-0 bottom-0 w-48 h-48 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="70" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" stroke="#5E3BEA" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="30" stroke="#5E3BEA" strokeWidth="0.5" />
      </svg>

      {/* Main text */}
      <h2 className="text-center text-[20px] sm:text-[24px] font-semibold text-[#5e6282] max-w-2xl mx-auto leading-snug z-10 relative">
        Subscribe to get information, latest news and other interesting offers about <span className="font-bold">Jadoo</span>
      </h2>

      {/* Form */}
      <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
        <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm w-full sm:w-[320px]">
          <MailIcon size={18} className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Your email"
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#ff946d] to-[#ff7d68] hover:brightness-105 transition text-white px-6 py-3 rounded-xl font-medium shadow-sm"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
