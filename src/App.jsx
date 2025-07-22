import AirlineLogos from './components/AairlineLogo';
import BookingSteps from './components/BookingSteps';
import Navbar from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TopDestinations from './components/TopDestinations';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Footer from './components/footer';

function App() {
  return (
    <div className="font-sans px-16 ">
      <Navbar />
      <Hero/>
      <Services/>
      <TopDestinations/>
      <BookingSteps/>
      <Testimonials/>
      <AirlineLogos/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
