import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us bg-gray-800 text-gray-200 pt-32">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-8 text-color1">
          About Luxury Leather
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-us__description">
            <p className="text-base leading-loose mb-4">
              Leather manufacturers be in production since 2000. Our mission is
              to elevate the everyday by crafting exceptional leather goods that
              are both stylish and functional. We are passionate about
              preserving the legacy of craftsmanship and believe that
              high-quality leather products should be accessible to everyone.
            </p>
            <p className="text-base leading-loose">
              Luxury Leather has a rich history dating back to 1986, originally
              based in Karachi, Pakistan. We've built a reputation for
              immaculately tailored leather goods, designed to meet the
              present-day standards of fashion and trends. We take pride in
              offering customizable products based on our clients' specific
              needs and specifications.
            </p>
          </div>
          {/* <div className="about-us__image">
            <img
              src="/about-us.jpg"
              alt="[Your Company Name] About Us Image"
              className="rounded-lg object-cover w-full h-full"
            />
          </div> */}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            Why Choose Us?
          </h3>
          <ul className="list-disc space-y-2 pl-4 text-gray-300">
            <li>
              <b>Luxury Made Real:</b> Experience timeless design and
              handcrafted quality in every piece..
            </li>
            <li>
              <b>Crafted for You:</b> We offer custom leather goods tailored to
              your specific needs.
            </li>
            <li>
              <b>Your Reliable Partner:</b> Get consistent quality, on-time
              delivery, and competitive prices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
