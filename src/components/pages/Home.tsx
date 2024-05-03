import Gallery from "../organs/Gallery";
import HeroSection from "../organs/HeroSection";
import Services from "../organs/Services";
import TopProducts from "../organs/TopProducts";
// import CategoryCard from "../organs/CategoryCard";
// import { LeatherTexts } from "../particles/DataLists";
// import BookingSteps from "../organs/BookingSteps"
// import NewsLetter from "../organs/NewsLetter";
// import Partners from "../organs/Partners"
// import Testimonials from "../organs/Testimonials"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <TopProducts />
      <Gallery />

      {/* <CategoryCard data={LeatherTexts.crust_leather} />
      <CategoryCard data={LeatherTexts.finished_leather} inverse={true} /> */}

      {/*
      <Testimonials />
      <BookingSteps />
      <Partners />
      <NewsLetter />
      */}
    </>
  );
};

export default Home;
