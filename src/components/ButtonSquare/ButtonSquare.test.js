import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonSquare from './ButtonSquare';

beforeEach(() => {
  render(
    <MemoryRouter>
      <ButtonSquare>Testing Link</ButtonSquare>
    </MemoryRouter>,
  );
});

describe('ButtonSquare testing suite', () => {
  test('should render button', () => {
    const buttonElement = screen.getByText('Testing Link');
    expect(buttonElement).toBeInTheDocument();
  });
});
