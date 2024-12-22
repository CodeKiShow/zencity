import { render, screen } from '@testing-library/react';
import GeoFavorites from '../components/GeoFavorites';

describe('GeoFavorites', () => {
  test('renders favorites list', () => {
    render(<GeoFavorites />);
    expect(screen.getByText('Lieux favoris')).toBeInTheDocument();
  });
});