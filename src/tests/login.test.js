import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const BUTTON_TEST_ID = 'login-submit-btn';
const VALID_EMAIL = 'fabiosaba@gmail.com';
const VALID_PASSWORD = '1234567';

describe('Login page', () => {
  test('Verify if a user can log in with a valid username and password.', async () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const password = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    userEvent.click(button);

    screen.getByText('PAGE FOODS');
    expect(button).not.toBeInTheDocument();
    expect(history.location.pathname).toBe('/foods');
  });
});
