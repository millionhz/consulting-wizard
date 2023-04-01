import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { IconButton } from '@mui/material';

function Searchbar({ updateSearchCriteria, onSearch }) {
  const [query, setQuery] = useState('');
  const [filterMenu, setFilterMenu] = useState(false);
  const [filterOn, setFilterOn] = useState('');

  let filter = 'all';
  const setFilter = (filter_) => () => {
    filter = filter_;
    setFilterMenu(false);
    filter === 'all' ? setFilterOn('') : setFilterOn(filter);
    updateSearchCriteria(query, filter);
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
    updateSearchCriteria(query, filter);
  };

  return (
    <SearchDiv>
      <SearchBar>
        <IconButton onClick={onSearch}>
          <SearchIcon />
        </IconButton>
        <SearchInput
          type="text"
          id="header-search"
          placeholder={filterOn !== '' ? `Search by ${filterOn}` : 'Search'}
          name="s"
          onChange={onQueryChange}
        />
        <FilterButton
          onClick={() => {
            setFilterMenu(!filterMenu);
          }}
        >
          <MenuIcon />
          <p>FILTER</p>
        </FilterButton>
      </SearchBar>
      <FilterMenu
        style={{
          display: filterMenu ? 'block' : 'none',
        }}
      >
        <FilterList>
          <FilterItem onClick={setFilter('all')}>All Categories</FilterItem>
          <FilterItem onClick={setFilter('major')}>Major</FilterItem>
          <FilterItem onClick={setFilter('graduation year')}>
            Graduation Year
          </FilterItem>
          <FilterItem onClick={setFilter('current placement')}>
            Current Placement
          </FilterItem>
        </FilterList>
      </FilterMenu>
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 2.5rem;
  margin: 1.5rem auto;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0;
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: #000000;
  margin: 0 0.8rem;
  font-size: 20px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 80%;
  margin: 0 0.5rem;
  font-size: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

const FilterButton = styled.button`
  width: 15%;
  height: 100%;
  margin: 0 0.5rem 0 0;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-left: 1px solid #000000;
`;

const MenuIcon = styled(DehazeOutlinedIcon)`
  font-size: 20px;
  margin: 0 0.8rem;
`;

const FilterMenu = styled.div`
  position: absolute;
  left: 63.2%;
  background-color: #ffffff;
  color: #000000;
  margin: -20px 0 0 auto;
  width: 12%;
  border: 1px solid #000000;
  font-size: 0.8rem;
  padding: 0;
`;

const FilterList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const FilterItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default Searchbar;
