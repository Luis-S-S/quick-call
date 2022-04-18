import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

describe('App testing suite', () => {
  test('should render main title', () => {
    const titleElement = screen.getByText(/necesitas servicios\?/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('should render professionals title', () => {
    const titleElement = screen.getByText(/nuestros profesionales mejor calificados/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('should render categories title', () => {
    const titleElement = screen.getByText(/categorías más buscadas/i);
    expect(titleElement).toBeInTheDocument();
  });
});
