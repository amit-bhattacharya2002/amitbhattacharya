// TextCarousel.js
import React from 'react';
import Slider from 'react-slick';

const TextCarousel = ({texts}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div className="text-carousel">
      <Slider {...settings}>
        {texts.map((text, index) => (
          <div key={index}>
            <h3>{text}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextCarousel;
