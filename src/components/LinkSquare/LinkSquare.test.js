import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LinkSquare from './LinkSquare';

beforeEach(() => {
  render(
    <MemoryRouter>
      <LinkSquare>Testing Link</LinkSquare>
    </MemoryRouter>,
  );
});

describe('LinkSquare testing suite', () => {
  test('should render link', () => {
    const linkElement = screen.getByText('Testing Link');
    expect(linkElement).toBeInTheDocument();
  });
});
