import React, { useState, useEffect } from 'react';
import './slider.css'; // Zaimportuj plik ze stylami dla komponentu
import italian from '../../assets/images/slider_italian.jpg';
import korean from '../../assets/images/slider_korean.jpg';
import japanese from '../../assets/images/slider_japanese.jpg';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../../index.css'
import { Link } from 'react-router-dom';


const Slider = () => {
  const sliderImages = [    
    {
      image: italian,
      text: 'Kuchnia włoska',
      description: 'Kuchnia włoska jest znana z bogatego wykorzystania świeżych składników, takich jak pomidory, oliwa z oliwek, czosnek i zioła. Jest to kuchnia, która celebruje prostotę i smak, ze szczególnym naciskiem na pasty, pizze, risotto i sycące sosy.'
      
    },
    {
      image: korean,
      text: 'Kuchnia koreańska',
      description: 'Kuchnia koreańska słynie z intensywności smaków i różnorodności potraw. Kimchi, pikantne zupy, bulgogi i bibimbap to jej znaki rozpoznawcze. Charakteryzuje ją użycie fermentowanych składników i bogactwo przypraw, w tym gochujang (pikantna pasta chili).'

    },
    {
      image: japanese,
      text: 'Kuchnia japońska',
      description: 'Charakterystyczna dla kuchni japońskiej jest subtelność i harmonia smaków oraz estetyczne podanie potraw. Sushi, sashimi, ramen i tempura to tylko niektóre z popularnych dań. Kładzie się duży nacisk na świeżość i jakość składników, zwłaszcza ryb i owoców morza.'

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
              <Link to='/recipes'><a href="#" class="button">Zobacz</a></Link>
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