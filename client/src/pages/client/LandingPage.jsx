import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Carousel from '../../components/Carousel';
import services_1 from '../../assets/services-card-1.png';
import services_2 from '../../assets/services-card-2.png';
import NavBar from '../../components/NavBarClient';
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
      <div>
        <NavBar page="About" />
      </div>
      <div>
        <Carousel />
      </div>
      <ImageWrapper>
        <Image src={services_1} alt="Service_1" />;
      </ImageWrapper>
      <ImageWrapper>
        <Image src={services_2} alt="Services_2" />;
      </ImageWrapper>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPageStudent;
