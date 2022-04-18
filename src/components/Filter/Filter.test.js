import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Filter from './Filter';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Filter />
    </MemoryRouter>,
  );
});

describe('Filter testing suite', () => {
  test('should render ciudad', () => {
    const titleElement = screen.getByText(/ciudad/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('should render especialidad', () => {
    const titleElement = screen.getByText(/especialidad/i);
    expect(titleElement).toBeInTheDocument();
  });
});
