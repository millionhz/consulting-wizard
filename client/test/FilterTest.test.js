import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Search from '../src/pages/client/Search';
import Searchbar from '../src/components/SearchBar';

// Mock the getConsultants function to return some test data
jest.mock('../src/api/backend', () => ({
  getConsultants: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          displayName: 'John Smith',
          yearOfGraduation: '2020',
          major: 'Computer Science',
          currentPlacement: 'Google',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          displayName: 'Jane Doe',
          yearOfGraduation: '2022',
          major: 'Business',
          currentPlacement: 'Amazon',
          bio: 'Nullam id velit sed metus gravida dignissim.',
        },
        {
          id: 3,
          displayName: 'Bob Johnson',
          yearOfGraduation: '2022',
          major: 'Engineering',
          currentPlacement: 'Microsoft',
          bio: 'Duis euismod leo et eleifend euismod.',
        },
        {
          id: 4,
          displayName: 'John Doe',
          yearOfGraduation: '2023',
          major: 'Computer Science',
          currentPlacement: 'Facebook',
          bio: 'Sed euismod, nisl eget aliquam tincidunt, nunc elit lacinia.',
        },
      ],
    })
  ),
}));

describe('Testing Search by Keyword', () => {


  test('test if major input exists', () => {
    const onSearchMock = jest.fn();
    const {getByText } = render(
        <Searchbar onSearch={onSearchMock} />
    );
    const MajorInput = getByText('All Categories');

    expect(MajorInput).toBeInTheDocument();

  });
  test('test if all categories input exists', () => {
    const onSearchMock = jest.fn();
    const {getByText } = render(
        <Searchbar onSearch={onSearchMock} />
    );
    const MajorInput = getByText('Major');

    expect(MajorInput).toBeInTheDocument();

  });

  test('test if graduration year input exists', () => {
    const onSearchMock = jest.fn();
    const {getByText } = render(
        <Searchbar onSearch={onSearchMock} />
    );
    const MajorInput = getByText('Graduation Year');

    expect(MajorInput).toBeInTheDocument();

  });

  test('test if Placement input exists render', () => {
    const onSearchMock = jest.fn();
    const {getByText } = render(
        <Searchbar onSearch={onSearchMock} />
    );
    const MajorInput = getByText('Current Placement');

    expect(MajorInput).toBeInTheDocument();

  });


});
