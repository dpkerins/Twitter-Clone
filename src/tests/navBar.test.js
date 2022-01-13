import { render, screen } from '@testing-library/react';
import ButtonAppBar from '../navBar';

test('renders navbar', () => {
  render(<ButtonAppBar />);
  const homeLink = screen.getByText('HOME');
  expect(homeLink).toBeInTheDocument();
});