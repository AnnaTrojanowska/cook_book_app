import React, { useState, useEffect } from 'react';
import './slider.css'; // Zaimportuj plik ze stylami dla komponentu
import image1 from '../../assets/images/bg6.jpg';
import image2 from '../../assets/images/bg6.jpg';
import image3 from '../../assets/images/bg6.jpg';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Slider = () => {
  const sliderImages = [    
   image1,
  image2, image3  ];

  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {sliderImages.map((image, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${image})` }} >
            <div className="slide-content">
              <h2>{sliderImages.title}</h2>
              <p>{sliderImages.description}</p>
            </div>
            <FaArrowAltCircleLeft className="arrow-icon left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="arrow-icon right-arrow" onClick={nextSlide} />
        </div>
        ))}
      </div>
      
    </div>
  );
};

export default Slider;