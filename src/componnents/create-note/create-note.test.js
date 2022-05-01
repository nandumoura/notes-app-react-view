import { render, screen } from '@testing-library/react';
import CreateNote from './create-note.js';

test('render Create note component', () => {
  render(<CreateNote />);
  const teste = screen.getByText("Select an existing note pad to place your new note.")
  expect(teste).toBeInTheDocument();
});
