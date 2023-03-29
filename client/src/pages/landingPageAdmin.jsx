import React, { useState } from 'react';
import LandingPage from './landingPage';
import Header from '../components/NavBarAdmin';
import Footer from '../components/Footer'

function LandingPageStudent() {
  return (
    <div>
    <Header/>
    <LandingPage/>
    <Footer/>
    
    </div>
  );
}

export default LandingPageStudent;
