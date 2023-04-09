import React from 'react';
import styled from '@emotion/styled';

function FormInputDiv({ label, type, name, placeholder, rows = 1, setValue }) {
  return (
    <FormDiv>
      <FormLabel htmlFor={name}>{label}:</FormLabel>
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        as={rows > 1 ? 'textarea' : 'input'}
        rows={rows}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormDiv>
  );
}

const FormDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  width: 40%;
  
`;

const FormInput = styled.input`
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;
  width: 55%;
  
  padding: 0.3rem;
  border: 1px solid #786e6e;
  border-radius: 5px;
`;

export default FormInputDiv;
