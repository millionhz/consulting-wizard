import React, { useState } from 'react';
import styled from '@emotion/styled';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function ProfileItem({
  description: description_,
  title,
  setValue = null,
  disabled,
}) {
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

  const textField = (
    <FieldDescription data-testid={`text-field-${title}`}>
      {description}
    </FieldDescription>
  );

  const editButton = (
    <IconButton onClick={textToInput} data-testid={title}>
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
        data-testid="edit-field"
      />
      <CommitButton onClick={inputToText} data-testid="commit-button">
        OK
      </CommitButton>
    </EditField>
  );

  return (
    <FieldDiv>
      <FieldText>
        <FieldTitle>{title}</FieldTitle>
        {isInputField ? inputField : textField}
      </FieldText>
      <div>{isInputField || disabled ? null : editButton}</div>
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
