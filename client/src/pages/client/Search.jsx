import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import Searchbar from '../../components/SearchBar';
import SearchResult from '../../components/SearchResults';
import { getSearchResults } from '../../api/backend';

function Search() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const updateSearchCriteria = (newSearchQuery, newFilter) => {
    setSearchQuery(newSearchQuery);
    setFilter(newFilter);
  };

  useEffect(() => {
    getSearchResults(searchQuery)
      .then((res) => {
        const allResults = res.data.map((result) => {
          return {
            id: result._id,
            displayName: result.displayName,
            major: result.major,
            yearOfGraduation: result.yearOfGraduation.toString(),
            currentPlacement: result.currentPlacement,
            bio: result.bio,
          };
        });

        let filteredResults = [];
        switch (filter) {
          case 'major':
            filteredResults = allResults.filter((result) =>
              result.major.toLowerCase().includes(searchQuery)
            );
            break;
          case 'graduation year':
            filteredResults = allResults.filter((result) =>
              result.yearOfGraduation.toLowerCase().includes(searchQuery)
            );
            break;
          case 'current placement':
            filteredResults = allResults.filter((result) =>
              result.currentPlacement.toLowerCase().includes(searchQuery)
            );
            break;
          default:
            filteredResults = allResults.filter((result) =>
              (
                result.displayName +
                result.yearOfGraduation +
                result.major +
                result.currentPlacement +
                result.bio
              )
                .toLowerCase()
                .includes(searchQuery)
            );
        }

        setResults(filteredResults);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery, filter]);

  return (
    <div>
      <NavBar page="Book Appointment" />
      <SearchPage>
        <Searchbar updateSearchCriteria={updateSearchCriteria} />
        <SearchResultsDiv>
          {results.map((result) => (
            <SearchResult
              name={result.displayName}
              major={result.major}
              year={result.yearOfGraduation}
              placement={result.currentPlacement}
              description={result.bio}
              key={results.indexOf(result)}
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
