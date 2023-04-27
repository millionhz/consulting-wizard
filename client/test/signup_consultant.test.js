import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import SignUp from '../src/pages/consultant/SignUpPage';

describe('SignUp', () => {
  test('Sign Up renders correctly.', () => {
    render(<SignUp />);
    expect(screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Last Name:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Password:')).toBeInTheDocument();
    expect(screen.getByText('Confirm Password:')).toBeInTheDocument();
    expect(screen.getByText('Major:')).toBeInTheDocument();
    expect(screen.getByText('Year of Graduation:')).toBeInTheDocument();
    expect(screen.getByText('Current Placement:')).toBeInTheDocument();
    expect(screen.getByText('Additional Information:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('When no input is provided, Submit Button is disabled', () => {
    // const { getByText, getByRole } =
    render(<SignUp />);
    const fname = screen.getByPlaceholderText('Enter your first name');
    const lname = screen.getByPlaceholderText('Enter your last name');
    const email = screen.getByPlaceholderText('Enter your LUMS email');
    const pwd = screen.getByPlaceholderText('Enter your password');
    const cpwd = screen.getByPlaceholderText('Confirm Password');
    const current = screen.getByPlaceholderText(
      'Enter your current university/organization'
    );
    const major = screen.getByPlaceholderText('Enter your major');
    const grad = screen.getByPlaceholderText('Enter your year of graduation');
    const add = screen.getByPlaceholderText(
      'Enter any additional information about yourself'
    );
    fireEvent.change(fname, { target: { value: '' } });
    fireEvent.change(lname, { target: { value: '' } });
    fireEvent.change(email, { target: { value: '' } });
    fireEvent.change(pwd, { target: { value: '' } });
    fireEvent.change(cpwd, { target: { value: '' } });
    fireEvent.change(current, { target: { value: '' } });
    fireEvent.change(major, { target: { value: '' } });
    fireEvent.change(grad, { target: { value: '' } });
    fireEvent.change(add, { target: { value: '' } });

    const button = screen.getByRole('button', { name: 'Submit' });

    expect(button).toHaveAttribute('disabled');
  });

  test('Error with invalid email', () => {
    render(<SignUp />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const fname = screen.getByPlaceholderText('Enter your first name');
    const lname = screen.getByPlaceholderText('Enter your last name');
    const email = screen.getByPlaceholderText('Enter your LUMS email');
    const pwd = screen.getByPlaceholderText('Enter your password');
    const cpwd = screen.getByPlaceholderText('Confirm Password');
    const current = screen.getByPlaceholderText(
      'Enter your current university/organization'
    );
    const major = screen.getByPlaceholderText('Enter your major');
    const grad = screen.getByPlaceholderText('Enter your year of graduation');
    const add = screen.getByPlaceholderText(
      'Enter any additional information about yourself'
    );

    fireEvent.change(fname, { target: { value: 'John' } });
    fireEvent.change(lname, { target: { value: 'Doe' } });
    fireEvent.change(email, { target: { value: 'john.doe@email.com' } });
    fireEvent.change(pwd, { target: { value: '12345678' } });
    fireEvent.change(cpwd, { target: { value: '12345678' } });
    fireEvent.change(current, { target: { value: 'LUMS' } });
    fireEvent.change(major, { target: { value: 'Computer Science' } });
    fireEvent.change(grad, { target: { value: 2023 } });
    fireEvent.change(add, { target: { value: 'Lorem Ipusm' } });
    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    const emailError = 'Please enter a valid email address.';
    expect(screen.getByText(emailError)).toBeInTheDocument();
  });

  test('Error with invalid password', () => {
    render(<SignUp />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const fname = screen.getByPlaceholderText('Enter your first name');
    const lname = screen.getByPlaceholderText('Enter your last name');
    const email = screen.getByPlaceholderText('Enter your LUMS email');
    const pwd = screen.getByPlaceholderText('Enter your password');
    const cpwd = screen.getByPlaceholderText('Confirm Password');
    const current = screen.getByPlaceholderText(
      'Enter your current university/organization'
    );
    const major = screen.getByPlaceholderText('Enter your major');
    const grad = screen.getByPlaceholderText('Enter your year of graduation');
    const add = screen.getByPlaceholderText(
      'Enter any additional information about yourself'
    );

    fireEvent.change(fname, { target: { value: 'John' } });
    fireEvent.change(lname, { target: { value: 'Doe' } });
    fireEvent.change(email, { target: { value: 'john.doe@lums.edu.pk' } });
    fireEvent.change(pwd, { target: { value: '123' } });
    fireEvent.change(cpwd, { target: { value: '123' } });
    fireEvent.change(current, { target: { value: 'LUMS' } });
    fireEvent.change(major, { target: { value: 'Computer Science' } });
    fireEvent.change(grad, { target: { value: 2023 } });
    fireEvent.change(add, { target: { value: 'Lorem Ipusm' } });
    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    const passwordError = 'Password must be 8 characters at least';
    expect(screen.getByText(passwordError)).toBeInTheDocument();
  });

  test('Error when password & confirm password do not match', () => {
    render(<SignUp />);
    const fname = screen.getByPlaceholderText('Enter your first name');
    const lname = screen.getByPlaceholderText('Enter your last name');
    const email = screen.getByPlaceholderText('Enter your LUMS email');
    const pwd = screen.getByPlaceholderText('Enter your password');
    const cpwd = screen.getByPlaceholderText('Confirm Password');
    const current = screen.getByPlaceholderText(
      'Enter your current university/organization'
    );
    const major = screen.getByPlaceholderText('Enter your major');
    const grad = screen.getByPlaceholderText('Enter your year of graduation');
    const add = screen.getByPlaceholderText(
      'Enter any additional information about yourself'
    );

    fireEvent.change(fname, { target: { value: 'John' } });
    fireEvent.change(lname, { target: { value: 'Doe' } });
    fireEvent.change(email, { target: { value: 'john.doe@lums.edu.pk' } });
    fireEvent.change(pwd, { target: { value: '12345678' } });
    fireEvent.change(cpwd, { target: { value: 'password123' } });
    fireEvent.change(current, { target: { value: 'LUMS' } });
    fireEvent.change(major, { target: { value: 'Computer Science' } });
    fireEvent.change(grad, { target: { value: 2023 } });
    fireEvent.change(add, { target: { value: 'Lorem Ipusm' } });
    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    const confirmPasswordError = 'Password and confirm password do not match!';
    expect(screen.getByText(confirmPasswordError)).toBeInTheDocument();
  });
});
