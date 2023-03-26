import React, { useState } from 'react';
import styled from '@emotion/styled';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function ProfileItem({ description: description_, title, setValue }) {
  const [description, setDescription] = useState(description_);
  const editHandler = (e) => {
    setDescription(e.target.value);
  };

  const rows = description.length / 50 + 1;

  const [isInputField, setInputField] = useState(false);

  const textToInput = () => {
    setInputField(true);
  };

  const inputToText = () => {
    setValue(description);
    setInputField(false);
  };

  const textField = <FieldDescription>{description}</FieldDescription>;

  const editButton = (
    <IconButton onClick={textToInput}>
      <EditIcon />
    </IconButton>
  );

  const inputField = (
    <EditField>
      <TextArea
        autoFocus
        type="textarea"
        rows={rows}
        defaultValue={description}
        onChange={editHandler}
      />
      <CommitButton onClick={inputToText}>OK</CommitButton>
    </EditField>
  );

  return (
    <FieldDiv>
      <FieldText>
        <FieldTitle>{title}</FieldTitle>
        {isInputField ? inputField : textField}
      </FieldText>
      <div>{isInputField || title === 'Email' ? null : editButton}</div>
    </FieldDiv>
  );
}

const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 0.5rem;
`;

const FieldText = styled.div`
  width: 100%;
`;

const FieldTitle = styled.p`
  font-size: 0.9rem;
  color: #786e6e;
  margin-bottom: 0;
  margin-top: 0;
`;

const FieldDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
`;

const EditField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  box-shadow: none;
  border: 2px solid;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
`;

const CommitButton = styled.button`
  background: #2c9612;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-left: 0.5rem;
  font-size: 1rem;
`;

export default ProfileItem;
