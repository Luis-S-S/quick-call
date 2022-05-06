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
  test('should render link', () => {
    const linkElement = screen.getByText('Testing Link');
    expect(linkElement).toBeInTheDocument();
  });
});
