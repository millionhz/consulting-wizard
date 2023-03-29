import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from './Carousel';
import sec from '../images/Group1.png';
import third from '../images/Group448.png';


const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;


function LandingPageStudent() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #0b0b45; }'}</style>
      </Helmet>
      <div>
        <Carousel />
      </div>
      <ImageWrapper>
        <Image src={sec} alt="Ad_1" />;
      </ImageWrapper>
      <ImageWrapper>
        <Image src={third} alt="Ad_2" />;
      </ImageWrapper>
     
    </div>
  );
}

export default LandingPageStudent;
