import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import Carousel from '../../components/Carousel';
import card1 from '../../assets/services-card-1.png';
import card2 from '../../assets/services-card-2.png';
import Header from '../../components/NavBarClient';
import Footer from '../../components/Footer';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
`;

const Image = styled.img`
  max-width: 80%;
  height: auto;
  margin: 0 auto;
`;

function LandingPageStudent() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #0b0b45; }'}</style>
      </Helmet>
      <Header page="About" />
      <div>
        <Carousel />
      </div>
      <ImageWrapper>
        <Image src={card1} alt="services_1" />;
      </ImageWrapper>
      <ImageWrapper>
        <Image src={card2} alt="services_2" />;
      </ImageWrapper>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPageStudent;
