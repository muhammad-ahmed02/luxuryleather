import React from "react";
// import { GalleryImages } from "../particles/DataLists";
import cover from "../../assets/gallery/cover.jpg"

const Gallery: React.FC = () => {
  return (
    <div className=" w-full bg-white">
      {/* {GalleryImages.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt}
          className="w-full h-[200px] object-cover p-[5px]"
        />
      ))} */}
      <img
          src={cover}
          alt="sfsdfas"
          className="w-full h-full object-cover"
        />
    </div>
  );
};

export default Gallery;
