import { render, screen } from '@testing-library/react';
import CreateTweet from '../newTweet';

test('renders new tweet field', () => {
  render(<CreateTweet />);
  const newTweetField = screen.getByDisplayValue("What's happening?");
  expect(newTweetField).toBeInTheDocument();
});

