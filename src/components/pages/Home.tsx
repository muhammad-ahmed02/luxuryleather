// import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection";
import NewsLetter from "../organs/NewsLetter";
// import Partners from "../organs/Partners"
import Services from "../organs/Services";
// import Testimonials from "../organs/Testimonials"
import TopProducts from "../organs/TopProducts";

const Home = () => {

  return (
    <>
      <HeroSection />
      <Services />
      <TopProducts />

      {/* <BookingSteps />
          <Testimonials />
          <Partners /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
