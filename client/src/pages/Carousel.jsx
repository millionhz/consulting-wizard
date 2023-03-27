import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line prettier/prettier, import/no-extraneous-dependencies
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/2.png';
import image2 from '../images/Group1.png';
// import image3 from './images/Group1.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
