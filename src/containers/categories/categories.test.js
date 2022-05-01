import { render, screen } from '@testing-library/react';
import Categories from './categories.js';

test('render Create note component', () => {
  render(<Categories />);
  const teste = screen.getByText("Select an existing note pad to place your new note.")
  expect(teste).toHaveClass("animated-true");
});
