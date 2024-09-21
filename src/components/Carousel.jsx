import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './Carousel.css';

export const Carousel = ({ data }) => {
  console.log(data.slides);
  const images = data.slides;
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : images - 1);
  };

  return (
    <div className='container-carousel'>
      <div className='carousel'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
        {images.map((item, index) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? 'slide' : 'slide slide-hidden'}
            />
          );
        })}
        <BsArrowRightCircleFill className='arrow arrow-rigth' onClick={nextSlide} />
        <span className='indicators'>
          {images.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={slide === index ? 'indicator' : 'indicator indicator-inactive'}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};
