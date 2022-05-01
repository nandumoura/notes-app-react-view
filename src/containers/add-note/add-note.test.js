import { render, screen } from '@testing-library/react';
import AddNote from './add-note.js';

test('render Create note component', () => {
  render(<AddNote />);
//   const teste = screen.getByText("Select an existing note pad to place your new note.")
//   expect(teste).toHaveClass("animated-true");
});
