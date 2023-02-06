import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "./images/audi-img.jpg", alt: "Image 1" },
    { src: "./images/tiguan-img.jpg", alt: "Image 2" },
    { src: "./images/work-img.jpg", alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image.src} alt={image.alt} />
          {/* <div className="WelcomeTxt">
            <h1>Velkommen til en hyggelig dekkhandel!</h1>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
