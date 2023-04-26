// import the necessary functions and modules
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

// import the components that need to be tested
import ManageProfilePage from '../src/pages/consultant/ManageProfilePage';

describe('Testing Profile Updates', () => {
  const displayName = 'Test User';
  const email = 'testuser@example.com';
  const major = 'Computer Science';
  const yearOfGraduation = '2025';
  const currentPlacement = 'Test Placement';
  const bio = 'Test bio';

  // mock the API function to update the user's profile information
  const mockSetProfileInfo = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          displayName,
          email,
          major,
          yearOfGraduation,
          currentPlacement,
          bio,
        },
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          displayName,
          email,
          major,
          yearOfGraduation,
          currentPlacement,
          bio,
        },
      })
    );

  jest.mock('../src/api/backend', () => ({
    setProfileInfo: mockSetProfileInfo,
  }));

  it('edit display name', async () => {
    // render the ManageProfilePage component
    const { getByTestId } = render(<ManageProfilePage />);

    // click the "Edit Profile" button
    const editButton = getByTestId('Name');
    act(() => {
      fireEvent.click(editButton);
    });

    // change value in the input field
    const input = getByTestId('edit-field');
    act(() => {
      fireEvent.change(input, { target: { value: 'Test User' } });
    });

    // click the OK button
    const okButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(okButton);
    });

    // check that the text field has the correct value
    const text = getByTestId(`text-field-Name`);
    expect(text.textContent).toBe('Test User');
  });

  it('edit major', async () => {
    // render the ManageProfilePage component
    const { getByTestId } = render(<ManageProfilePage />);

    // click the "Edit Profile" button
    const editButton = getByTestId('Major');
    act(() => {
      fireEvent.click(editButton);
    });

    // change value in the input field
    const input = getByTestId('edit-field');
    act(() => {
      fireEvent.change(input, { target: { value: 'Computer Science' } });
    });

    // click the OK button
    const okButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(okButton);
    });

    // check that the text field has the correct value
    const text = getByTestId(`text-field-Major`);
    expect(text.textContent).toBe('Computer Science');
  });

  it('edit year of graduation', async () => {
    // render the ManageProfilePage component
    const { getByTestId } = render(<ManageProfilePage />);

    // click the "Edit Profile" button
    const editButton = getByTestId('Year of Graduation');
    act(() => {
      fireEvent.click(editButton);
    });

    // change value in the input field
    const input = getByTestId('edit-field');
    act(() => {
      fireEvent.change(input, { target: { value: '2025' } });
    });

    // click the OK button
    const okButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(okButton);
    });

    // check that the text field has the correct value
    const text = getByTestId(`text-field-Year of Graduation`);
    expect(text.textContent).toBe('2025');
  });

  it('edit current placement', async () => {
    // render the ManageProfilePage component
    const { getByTestId } = render(<ManageProfilePage />);

    // click the "Edit Profile" button
    const editButton = getByTestId('Current Placement');
    act(() => {
      fireEvent.click(editButton);
    });

    // change value in the input field
    const input = getByTestId('edit-field');
    act(() => {
      fireEvent.change(input, { target: { value: 'Test Placement' } });
    });

    // click the OK button
    const okButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(okButton);
    });

    // check that the text field has the correct value
    const text = getByTestId(`text-field-Current Placement`);
    expect(text.textContent).toBe('Test Placement');
  });

  it('edit additional information', async () => {
    // render the ManageProfilePage component
    const { getByTestId } = render(<ManageProfilePage />);

    // click the "Edit Profile" button
    const editButton = getByTestId('Additional Information');
    act(() => {
      fireEvent.click(editButton);
    });

    // change value in the input field
    const input = getByTestId('edit-field');
    act(() => {
      fireEvent.change(input, { target: { value: 'test bio' } });
    });

    // click the OK button
    const okButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(okButton);
    });

    // check that the text field has the correct value
    const text = getByTestId(`text-field-Additional Information`);
    expect(text.textContent).toBe('test bio');
  });

  it('ensure email cannot be edited', async () => {
    // render the ManageProfilePage component
    const { queryByTestId } = render(<ManageProfilePage />);

    // check that the "Edit Profile" button is not present
    expect(queryByTestId('Email')).not.toBeInTheDocument();
  });

  it('save changes', async () => {
    // edit all fields
    const { getByTestId } = render(<ManageProfilePage />);
    const editNameButton = getByTestId('Name');
    act(() => {
      fireEvent.click(editNameButton);
    });
    const nameInput = getByTestId('edit-field');
    act(() => {
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
    });
    const nameOkButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(nameOkButton);
    });

    const editMajorButton = getByTestId('Major');
    act(() => {
      fireEvent.click(editMajorButton);
    });
    const majorInput = getByTestId('edit-field');
    act(() => {
      fireEvent.change(majorInput, { target: { value: 'Computer Science' } });
    });
    const majorOkButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(majorOkButton);
    });

    const editYearButton = getByTestId('Year of Graduation');
    act(() => {
      fireEvent.click(editYearButton);
    });
    const yearInput = getByTestId('edit-field');
    act(() => {
      fireEvent.change(yearInput, { target: { value: '2025' } });
    });
    const yearOkButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(yearOkButton);
    });

    const editPlacementButton = getByTestId('Current Placement');
    act(() => {
      fireEvent.click(editPlacementButton);
    });
    const placementInput = getByTestId('edit-field');
    act(() => {
      fireEvent.change(placementInput, { target: { value: 'Test Placement' } });
    });
    const placementOkButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(placementOkButton);
    });

    const editBioButton = getByTestId('Additional Information');
    act(() => {
      fireEvent.click(editBioButton);
    });
    const bioInput = getByTestId('edit-field');
    act(() => {
      fireEvent.change(bioInput, { target: { value: 'test bio' } });
    });
    const bioOkButton = getByTestId('commit-button');
    act(() => {
      fireEvent.click(bioOkButton);
    });

    // check that all fields have the correct values
    const nameText = getByTestId(`text-field-Name`);
    expect(nameText.textContent).toBe('Test User');
    const majorText = getByTestId(`text-field-Major`);
    expect(majorText.textContent).toBe('Computer Science');
    const yearText = getByTestId(`text-field-Year of Graduation`);
    expect(yearText.textContent).toBe('2025');
    const placementText = getByTestId(`text-field-Current Placement`);
    expect(placementText.textContent).toBe('Test Placement');
    const bioText = getByTestId(`text-field-Additional Information`);
    expect(bioText.textContent).toBe('test bio');

    // find the "Save Changes" button
    const saveButton = screen.getByText('Save Changes');
    expect(saveButton).toBeInTheDocument();

    // click the "Save Changes" button
    act(() => {
      fireEvent.click(saveButton);
    });

    // check that the user profile information was updated
    await waitFor(() => {
      expect(mockSetProfileInfo).toHaveBeenCalledWith({
        displayName: 'Test User',
        major: 'Computer Science',
        yearOfGraduation: '2025',
        currentPlacement: 'Test Placement',
        bio: 'test bio',
      });
    });
  });
});
