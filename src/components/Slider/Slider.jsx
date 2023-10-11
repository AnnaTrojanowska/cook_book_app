import React, { useState, useEffect } from 'react';
import './slider.css'; // Zaimportuj plik ze stylami dla komponentu
import image1 from '../../assets/images/bg6.jpg';
import image2 from '../../assets/images/bg6.jpg';
import image3 from '../../assets/images/bg6.jpg';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Slider = () => {
  const sliderImages = [    
    {
      image: image1,
      text: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis, ullam, ducimus nobis explicabo iusto recusandae iure pariatur error vitae atque corporis eos aperiam harum earum dolorem voluptatem, nihil veniam.'
      
    },
    {
      image: image2,
      text: 'Lorem ipsum2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis, ullam, ducimus nobis explicabo iusto recusandae iure pariatur error vitae atque corporis eos aperiam harum earum dolorem voluptatem, nihil veniam.'

    },
    {
      image: image3,
      text: 'Lorem ipsum3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis, ullam, ducimus nobis explicabo iusto recusandae iure pariatur error vitae atque corporis eos aperiam harum earum dolorem voluptatem, nihil veniam.'

    },
  ];

  
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
        {sliderImages.map((imageObj, index) => (
          <div key={index} className="slide">
            <img src={imageObj.image} alt="" />
            <div className="slide-content">
              <h2>{imageObj.text}</h2>
              <p>{imageObj.description}</p>
              <a href="#" class="btn delicious-btn">Zobacz</a>
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