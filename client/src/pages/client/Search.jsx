import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';
import { getConsultants } from '../../api/backend';

function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getConsultants()
      .then(({ data }) => parseConsultants(data))
      .then((data) => setResults(data));
  }, []);

  const parseConsultants = (data) =>
    data.map((result) => ({
      ...result,
      yearOfGraduation: result.yearOfGraduation.toString(),
    }));

  const filterResults = () => {
    let filteredResults = [];
    switch (filter) {
      case 'major':
        filteredResults = results.filter((result) =>
          result.major.toLowerCase().includes(query)
        );
        break;
      case 'graduation year':
        filteredResults = results.filter((result) =>
          result.yearOfGraduation.toLowerCase().includes(query)
        );
        break;
      case 'current placement':
        filteredResults = results.filter((result) =>
          result.currentPlacement.toLowerCase().includes(query)
        );
        break;
      default:
        filteredResults = results.filter((result) =>
          (
            result.displayName +
            result.yearOfGraduation +
            result.major +
            result.currentPlacement +
            result.bio
          )
            .toLowerCase()
            .includes(query)
        );
    }
    setResults(filteredResults);
  };

  const onSearch = (query_, filter_) => {
    getConsultants()
      .then(({ data }) => parseConsultants(data))
      .then((data) => {
        setResults(data);
        setQuery(query_.toLowerCase());
        setFilter(filter_.toLowerCase());
      });
  };

  useEffect(() => {
    filterResults();
  }, [query, filter]);

  return (
    <div>
      <NavBar page="Book Appointment" />
      <SearchPage>
        <Searchbar onSearch={onSearch} />
        <SearchResultsDiv>
          {results.map((result) => (
            <SearchResult
              name={result.displayName}
              major={result.major}
              year={result.yearOfGraduation}
              placement={result.currentPlacement}
              description={result.bio}
              key={result.id}
              id={result.id}
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
