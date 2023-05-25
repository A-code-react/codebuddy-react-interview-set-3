import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselApp = () => {
  const imageUrls = [
    'https://via.placeholder.com/301',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/301',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300'

  ];

  return (
    <div className="app">
      {/* Rest of the code */}
      <div className="carousel-container">
        <Carousel>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Image ${index}`} height="300" width="300" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselApp;
