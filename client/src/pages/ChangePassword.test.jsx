import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import ChangePassword from './ChangePassword';

const UserContext = React.createContext();

describe('Change Password', () => {
  it('Successful Password Change', () => {
    const user = { email: 'hamza@app.com' };
    render(
      <UserContext.Provider value={user}>
        <ChangePassword />
      </UserContext.Provider>
    );
    const submitBtn = screen.getByTestId('submitButton');
    const oldPasswordInputNode =
      screen.getByPlaceholderText('Enter Old Password');
    const newPasswordInputNode =
      screen.getByPlaceholderText('Enter New Password');
    const confirmNewPasswordInputNode = screen.getByPlaceholderText(
      'Confirm New Password'
    );
    userEvent.type(oldPasswordInputNode, '123456');
    userEvent.type(newPasswordInputNode, 'password');
    userEvent.type(confirmNewPasswordInputNode, 'passwor');

    userEvent.click(submitBtn);
    const errorMessage = screen.getByText('Passwords do not match!');
    expect(errorMessage).toBeInTheDocument();
  });
});
