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
  test('render search bar', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <Searchbar onSearch={onSearchMock} />
    );
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('update search query', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Searchbar onSearch={onSearchMock} />
    );
    const searchInput = getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    fireEvent.change(searchInput, { target: { value: 'none' } });
    expect(searchInput.value).toBe('none');

    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput.value).toBe('');
  });

  test('trigger onSearch', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <Searchbar onSearch={onSearchMock} />
    );
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('test', '');

    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);
    expect(onSearchMock).toHaveBeenCalledTimes(2);
    expect(onSearchMock).toHaveBeenCalledWith('', '');
  });

  it('display all consultants when no search query is entered', async () => {
    const { getByText } = render(<Search />);

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    expect(getByText('John Smith')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
    expect(getByText('Bob Johnson')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('display consultants matching the display name keyword', async () => {
    let getByTestId, getByText, queryByText;

    await act(async () => {
      const rendered = render(<Search />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
      queryByText = rendered.queryByText;
    });

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    const searchInput = getByTestId('header-search');
    const searchButton = getByTestId('search-button');

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'John' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('John Smith')).toBeInTheDocument();
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Doe' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('John Doe')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Jane Doe')).toBeInTheDocument();
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Bob' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('Bob Johnson')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Bob Johnson')).toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
    }, 1000);
  });

  it('display consultants matching the year of graduation keyword', async () => {
    let getByTestId, getByText, queryByText;

    await act(async () => {
      const rendered = render(<Search />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
      queryByText = rendered.queryByText;
    });

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    const searchInput = getByTestId('header-search');
    const searchButton = getByTestId('search-button');

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: '2020' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('John Smith')).toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: '2022' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('Jane Doe')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Jane Doe')).toBeInTheDocument();
      expect(getByText('Bob Johnson')).toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: '2019' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    setTimeout(() => {
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
    }, 1000);
  });

  it('display consultants matching the major keyword', async () => {
    let getByTestId, getByText, queryByText;

    await act(async () => {
      const rendered = render(<Search />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
      queryByText = rendered.queryByText;
    });

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    const searchInput = getByTestId('header-search');
    const searchButton = getByTestId('search-button');

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Business' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('Jane Doe')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Jane Doe')).toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Computer Science' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('John Doe')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Jane Doe')).toBeInTheDocument();
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
    }, 1000);
  });

  it('display consultants matching the current placement keyword', async () => {
    let getByTestId, getByText, queryByText;

    await act(async () => {
      const rendered = render(<Search />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
      queryByText = rendered.queryByText;
    });

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    const searchInput = getByTestId('header-search');
    const searchButton = getByTestId('search-button');

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'mIcRoSoFt' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('Bob Johnson')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Bob Johnson')).toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
    }, 1000);
  });

  it('display consultants matching the additional information keyword', async () => {
    let getByTestId, getByText, queryByText;

    await act(async () => {
      const rendered = render(<Search />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
      queryByText = rendered.queryByText;
    });

    // Wait for the consultants to be loaded
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());

    const searchInput = getByTestId('header-search');
    const searchButton = getByTestId('search-button');

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'duis' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('Bob Johnson')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Bob Johnson')).toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'et' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    await waitFor(() => expect(getByText('John Smith')).toBeInTheDocument());
    setTimeout(() => {
      expect(getByText('Bob Johnson')).toBeInTheDocument();
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
      expect(getByText('John Smith')).toBeInTheDocument();
    }, 1000);

    // Enter a search query
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'null' } });
      fireEvent.click(searchButton);
    });

    // Wait for the search results to be filtered
    setTimeout(() => {
      expect(queryByText('Bob Johnson')).not.toBeInTheDocument();
      expect(queryByText('John Doe')).not.toBeInTheDocument();
      expect(queryByText('Jane Doe')).not.toBeInTheDocument();
      expect(queryByText('John Smith')).not.toBeInTheDocument();
    }, 1000);
  });
});
