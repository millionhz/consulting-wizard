import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from './Carousel';
import sec from '../images/Group1.png';
import third from '../images/Group448.png';

function LandingPageStudent() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div>
        <img src={sec} alt="Ad_1" />;
      </div>
      <div>
        <img src={third} alt="Ad 2" />;
      </div>
    </div>
  );
}

export default LandingPageStudent;
