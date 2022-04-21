import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LinkRound from './LinkRound';

beforeEach(() => {
  render(
    <MemoryRouter>
      <LinkRound>Testing Link</LinkRound>
    </MemoryRouter>,
  );
});

describe('LinkRound testing suite', () => {
  test('should render link', () => {
    const linkElement = screen.getByText('Testing Link');
    expect(linkElement).toBeInTheDocument();
  });
});
