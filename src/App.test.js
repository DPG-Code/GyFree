import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  render(<App />)
  const title = await screen.findByText(/Gifs recientes/i)
  expect(title).toBeInTheDocument()
});
