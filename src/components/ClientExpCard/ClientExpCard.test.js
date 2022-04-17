import { render, screen } from '@testing-library/react';
import ClientExpCard from './ClientExpCard';

describe('ClientExpCard testing suite', () => {
  test('should render with given object', () => {
    const details = {
      name: 'Testing Name',
      experience: 'Testing experience string',
    };

    render(<ClientExpCard details={details} />);

    const nameElement = screen.getByText(details.name);
    const experienceElement = screen.getByText(details.experience);

    expect(nameElement).toBeInTheDocument();
    expect(experienceElement).toBeInTheDocument();
  });
});
