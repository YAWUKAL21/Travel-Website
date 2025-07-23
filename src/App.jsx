import AirlineLogos from './components/AairlineLogo';
import BookingSteps from './components/BookingSteps';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TopDestinations from './components/TopDestinations';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main >
         <Hero /> 
        <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
         
          <Services />
          <TopDestinations />
          <BookingSteps />
          <Testimonials />
          <AirlineLogos />
          <Subscribe />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
