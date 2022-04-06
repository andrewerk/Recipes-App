import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Tests the foods page', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
  });

  it('1-should render the foods page', async () => {
    expect(await screen
      .findByRole('heading', { name: 'Foods', level: 1 })).toBeInTheDocument();
  });

  it('2-should have an icon with data-testid- profile-top-btn', async () => {
    expect(await screen
      .findByTestId('profile-top-btn')).toBeInTheDocument();
  });

  it('3-should have an icon with data-testid- search-top-btn', async () => {
    expect(await screen
      .findByTestId('search-top-btn')).toBeInTheDocument();
  });

  it('4-should display All category button', async () => {
    const categoryBtn = await screen.findByTestId('All-category-filter');
    expect(categoryBtn).toBeInTheDocument();
  });
});
