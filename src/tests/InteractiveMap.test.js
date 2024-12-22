import { render, screen } from '@testing-library/react';
import InteractiveMap from '../components/InteractiveMap';

describe('InteractiveMap', () => {
  test('renders map container', () => {
    render(<InteractiveMap />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});