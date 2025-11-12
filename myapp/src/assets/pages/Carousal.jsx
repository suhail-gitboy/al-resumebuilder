import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Carousal = () => {
   const settings = {
    dots: true, // show navigation dots
    infinite: true,
    speed: 600,
    centerMode: true, // enables highlighting effect
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const images = [
    "https://img.freepik.com/premium-psd/clean-modern-resume-portfolio-cv-template_106176-2712.jpg",
    "https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_106176-2719.jpg?t=st=1761757161~exp=1761760761~hmac=7c131c03cbeac5a663cf0098aa67568c749817017e687346ef6c9413751567af",
    "https://img.freepik.com/free-psd/clean-modern-resume-cv-template_237398-294.jpg?w=360",
    "https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_120329-3603.jpg?w=360",
    "https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/m1M8UHl3bVs-photo.webp",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Resume types
      </h2>

      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="px-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className='bg-white/10  rounded-md shadow shadow-white/20'>
                <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-64 object-contain hover:scale-102 px-2 py-5 transition-transform duration-300"
              />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal
