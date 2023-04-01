import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResults';

function Search() {
  const allResults = [
    {
      name: 'Umama Nasir Abbasi',
      major: 'BS Computer Science',
      year: '2023',
      placement: 'Google',
      description:
        'I am a software engineer at Google. I have been working here for 2 years. I have a lot of experience.',
    },
    {
      name: 'Ayesha Fazal',
      major: 'BS Computer Science',
      year: '2023',
      placement: 'Amazon',
      description:
        'I am a software engineer at Amazon. I have been working here for 3 years.',
    },
    {
      name: 'Eimaan Saqib',
      major: 'BS Computer Science',
      year: '2024',
      placement: 'Facebook',
      description:
        'I am a software engineer at Facebook. I have been working here for 1 year.',
    },
    {
      name: 'Hamza',
      major: 'BS Computer Science',
      year: '2024',
      placement: 'Oracle',
      description:
        'I am a software engineer at Oracle. I have been working here for 1 and a half year.',
    },
    {
      name: 'Maaz',
      major: 'BS Computer Science',
      year: '2024',
      placement: 'Microsoft',
      description:
        'I am a software engineer at Microsoft. I have been working here for 15 months.',
    },
    {
      name: 'Ahmad',
      major: 'BS Computer Science',
      year: '2024',
      placement: 'Apple',
      description: 'I am a software engineer at Apple.',
    },
  ];

  const [results, setResults] = useState(allResults);

  return (
    <div>
      <NavBar page="Book Appointment" />
      <SearchPage>
        <Searchbar results={allResults} setResults={setResults} />
        <SearchResultsDiv>
          {results.map((result) => (
            <SearchResult
              name={result.name}
              major={result.major}
              year={result.year}
              placement={result.placement}
              description={result.description}
              key={result.name + result.major + result.year}
            />
          ))}
        </SearchResultsDiv>
      </SearchPage>
      <Footer />
    </div>
  );
}

const SearchResultsDiv = styled.div`
  width: 45vw;
  background-color: #ffffff;
  margin: 0 auto 2rem auto;
  border-radius: 5px;
  padding: 0 3rem;
`;

const SearchPage = styled.div`
  min-height: 75vh;
`;

export default Search;
