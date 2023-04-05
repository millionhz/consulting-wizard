// import React from 'react';
import styled, { css } from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 5rem;
  border-radius: 0rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  vertical-align: top;
  margin: 0 auto;
  background: white;
  width: 40%;
  height: 22px;
  color: black;
  border-style: solid;
  border-radius: 13px;
  ::placeholder {
    color: #786e6e;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  margin: auto;
  font-weight: bold;
  color: black;
`;

export const Div = styled.div`
  padding: 10px;
  margin: auto;
  align: left;
  text-align: center;
`;
export const ErrorDiv = styled.div`
  padding: 10px;
  margin: auto;
  align: left;
  font-size: 13px;
  text-align: center;
  color: red;
`;
export const Button = styled.button`
  text-align: start;
  font-size: 13px;
  color: white;
  text-align: center;
  width: 10%;
  border-radius: 13px;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.variant === 'cancel' ? '#FFFFFF' : '#0B0B45'};
  color: ${(props) => (props.variant === 'cancel' ? '#0B0B45' : '#FFFFFF')};
  ${(props) => props.disabled && css`
      opacity: 0.7;
      cursor: not-allowed;
    `}
`;

// export { Background, Input, Label, Div, Button };
