import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

function SearchResult({ name, major, year }) {
  const location = useLocation();
  const onClickBook = () => {
    const name_ = name.replace(/\s/g, '_').toLowerCase();
    window.location.href = `${location.pathname}/${name_}`;
  };
  const onClickProfile = () => {
    const name_ = name.replace(/\s/g, '_').toLowerCase();
    window.location.href = `/consultant/${name_}`;
  };

  return (
    <SearchResultItem>
      <CounselorName>{name}</CounselorName>
      <CounselorDetails>
        {major}
        <br />
        Graduated in {year}
      </CounselorDetails>
      <ButtonsDiv>
        <BookButton onClick={onClickBook}>Book Appointment</BookButton>
        <ViewProfileButton onClick={onClickProfile}>
          View Profile
        </ViewProfileButton>
      </ButtonsDiv>
    </SearchResultItem>
  );
}

const SearchResultItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #aaaaaa;
  color: #000000;
`;

const CounselorName = styled.p`
  font-weight: 500;
  width: 30%;
  text-align: left;
`;

const CounselorDetails = styled.p`
  font-size: 0.7rem;
  text-align: left;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const BookButton = styled.button`
  background-color: #2c9612;
  color: #ffffff;
  border: solid 1px #2c9612;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 0.5rem 1rem;
  width: 100%;

  &:hover {
    background-color: #2c8612;
  }
`;

const ViewProfileButton = styled.button`
  background-color: #bfab25;
  color: #ffffff;
  border: solid 1px #bfab25;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 0.5rem 1rem;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background-color: #bf9b25;
  }
`;

export default SearchResult;
