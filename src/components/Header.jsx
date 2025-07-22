import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-12 px-26 sm:px-6 lg:px-8 relative">
      {/* Background colored section - right half */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e4910d] -z-10 rounded-l-[80px]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
         <h1 className="text-4xl font-extrabold text-black font-sans flex items-center">
      Jad
      <span className="relative mx-[1px]">
        <span className="text-black">o</span>
        <span className="absolute top-6.5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-amber-600 rounded-full"></span>
      </span>
      <span className="relative mx-[1px]">
        <span className="text-black">o</span>
        <span className="absolute top-6.5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5  bg-amber-600 rounded-full"></span>
      </span>
    </h1>
          </div>

          <div className="hidden md:flex items-center space-x-15">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-[#212832] font-medium hover:text-[#F1A501] transition">Destinations</a>
              <a href="#" className="text-[#212832] font-medium hover:text-[#F1A501] transition">Hotels</a>
              <a href="#" className="text-[#212832] font-medium hover:text-[#F1A501] transition">Flights</a>
              <a href="#" className="text-[#212832] font-medium hover:text-[#F1A501] transition">Bookings</a>
            </nav>

            {/* Language and Auth Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#212832] font-medium hover:text-[#F1A501] transition">Login</button>
              <button className="bg-[#F1A501] text-white px-6 py-2 rounded-md font-medium hover:bg-[#e59400] transition">Sign up</button>
              <div className="flex items-center">
                <span className="text-[#212832] font-medium mr-2">EN</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#212832" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#181E4B] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#" className="block text-[#181E4B] font-medium">Destinations</a>
            <a href="#" className="block text-[#181E4B] font-medium">Hotels</a>
            <a href="#" className="block text-[#181E4B] font-medium">Flights</a>
            <a href="#" className="block text-[#181E4B] font-medium">Bookings</a>
            <div className="pt-4 border-t border-gray-200">
              <button className="block w-full text-left text-[#181E4B] font-medium mb-4">Login</button>
              <button className="block w-full text-left bg-[#F1A501] text-white px-4 py-2 rounded-md font-medium">Sign up</button>
              <div className="flex items-center mt-4">
                <span className="text-[#181E4B] font-medium mr-2">EN</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#181E4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}