// import BookingSteps from "../organs/BookingSteps"
import { useState } from "react";
import { Button } from "../atoms/Button";
import CategoryCard from "../organs/CategoryCard";
import HeroSection from "../organs/HeroSection";
import NewsLetter from "../organs/NewsLetter";
// import Partners from "../organs/Partners"
import Services from "../organs/Services";
// import Testimonials from "../organs/Testimonials"
import TopProducts from "../organs/TopProducts";
import { ProductsTexts } from "../particles/DataLists";

const Home = () => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <>
      <HeroSection />
      <Services />
      <TopProducts />

      {/*  DRIVER GLOVES */}
      <CategoryCard data={ProductsTexts.driver_gloves} />
      {/*  Assembly GLOVES */}
      <CategoryCard data={ProductsTexts.assembly_gloves} inverse={true} />

      {!loadMore && (
        <div className="w-full flex justify-center my-10">
          <Button
            type="button"
            className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-extralight rounded-lg"
            onClick={() => setLoadMore(true)}
          >
            Load More
          </Button>
        </div>
      )}

      {loadMore && (
        <>
          {/* CANADIAN RIGGER GLOVES */}
          <CategoryCard data={ProductsTexts.canadian_rigger_gloves} />
          {/* IMAPCT GLOVES */}
          <CategoryCard data={ProductsTexts.impact_gloves} inverse={true} />
          {/* WELDING GLOVES */}
          <CategoryCard data={ProductsTexts.welding_gloves} />
          {/* WELDING ACCESSORIES */}
          <CategoryCard
            data={ProductsTexts.welding_accessories}
            inverse={true}
          />
        </>
      )}
      {/* TIG GLOVES */}
      <CategoryCard data={ProductsTexts.tig_gloves} />

      {/* <BookingSteps />
          <Testimonials /> 
          <Partners /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
