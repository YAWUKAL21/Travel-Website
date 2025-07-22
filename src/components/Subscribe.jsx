import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16">
      <div className="bg-[#f8f0ff] rounded-tl-[100px] relative overflow-hidden max-w-7xl mx-auto px-8 md:px-20 py-20">
        {/* Background circles */}
        <img
          src="/circle.png"
          alt="Left design"
          className="absolute left-1 bottom-[-50px] w-60 h-60 opacity-50"
        />
        <img
          src="/circle2.png"
          alt="Right design"
          className="absolute right-[-60px] top-0 w-60 opacity-50"
        />

        {/* Paper Plane icon */}
        <div className="absolute right-0 top-0 w-15 h-15 bg-[#5D5FEF] rounded-full flex items-center justify-center shadow-md">
          <FaPaperPlane className="text-white text-sm" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-[#5E6282] text-xl md:text-2xl font-semibold max-w-2xl mx-auto leading-relaxed">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          <form className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center bg-white px-4 py-3 rounded-md shadow-md w-full sm:w-[350px]">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full focus:outline-none text-sm text-[#5E6282]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FF946D] hover:bg-[#f57c4c] transition text-white px-6 py-3 rounded-md font-medium shadow-md cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
