import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

beforeEach(() => {
  render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>,
  );
});

describe('NavigationBar testing suite', () => {
  test('should render link buscar', () => {
    const linkElement = screen.getByText(/buscar/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should render link registrarse', () => {
    const linkElement = screen.getByText(/registrarse/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should render link iniciar sesion', () => {
    const linkElement = screen.getByText(/iniciar sesión/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should render link editar perfil', () => {
    const linkElement = screen.getByText(/editar perfil/i);
    expect(linkElement).toBeInTheDocument();
  });
});
