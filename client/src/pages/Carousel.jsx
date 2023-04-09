import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
// import image3 from './images/Group1.png';


const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImageWrapper>
        <Image src={image2} alt="First slide" />
        </ImageWrapper>
      </Carousel.Item>
      <Carousel.Item>
        <ImageWrapper>
        <Image src={image1} alt="Second slide" />
        </ImageWrapper>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
