import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import GreekGod from "./components/GreekGod";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('all gods rendered', async () => {
  render(<App />);
  const el = screen.getByText('Zeus');
  expect(el).toBeInTheDocument();
  await waitFor(()=>expect(screen.getAllByText(/views today/g).length).toBe(14));
})

test('views fetch', () => {
  const promise = GreekGod.wikiViews('Zeus')
  // async expectations should be returned
  return expect(promise).resolves.toBeGreaterThan(0)
})
