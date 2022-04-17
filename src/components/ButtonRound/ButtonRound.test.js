import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonRound from './ButtonRound';

beforeEach(() => {
  render(
    <MemoryRouter>
      <ButtonRound>Testing Link</ButtonRound>
    </MemoryRouter>,
  );
});

describe('ButtonRound testing suite', () => {
  test('should render button', () => {
    const buttonElement = screen.getByText('Testing Link');
    expect(buttonElement).toBeInTheDocument();
  });
});
