import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Footer() {
  return (
    <div
      style={{
        color: '#938D8D',
        textAlign: 'left',
        padding: '0.2rem 3rem 0.2rem 3rem',
        fontSize: '0.9rem',
        borderTop: '1px solid #938D8D',
      }}
    >
      <p>Copyright @ ConsultingWizards 2023</p>
    </div>
  );
}

export default Footer;
