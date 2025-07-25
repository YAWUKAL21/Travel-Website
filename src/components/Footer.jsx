import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#5E6282] py-12 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#181E4B] mb-4">Jadoo.</h2>
          <p className="text-sm leading-relaxed">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-black font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-black font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="text-black font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Airlinefees</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low fare tips</a></li>
          </ul>
        </div>

        {/* Social and App Links */}
        <div className="flex flex-col sm:items-start items-center text-center sm:text-left gap-5">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] shadow-sm">
              <FaFacebookF className="text-[#14183E]" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-sm">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] shadow-sm">
              <FaTwitter className="text-[#14183E]" />
            </a>
          </div>

          {/* Discover App */}
          <p className="text-lg font-medium text-[#5E6282]">Discover our app</p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 w-full">
            <a
              href="https://play.google.com/store"
              className="flex items-center px-4 py-2 w-44 h-12 bg-black rounded-full shadow-md hover:opacity-90"
            >
              <img
                src="/playstore.png"
                alt="playstore"
                className="h-6 w-6 mr-3"
              />
              <div className="text-left text-white text-xs">
                <p className="font-semibold text-sm">Google Play</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center px-4 py-2 w-44 h-12 bg-black rounded-full shadow-md hover:opacity-90"
            >
              <FaApple className="text-white text-2xl mr-3" />
              <div className="text-left text-white text-xs">
                <p className="font-semibold text-sm">Apple Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10">
        <p>All rights reserved © jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;
