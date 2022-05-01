import { render, screen } from '@testing-library/react';
import Login from './login.js';

test('render login page', () => {
  render(<Login />);
  const someNotes = screen.getByText("Let's make some notes!")
  const forgotPass = screen.getByText("Forgot Password")
  const dontHave = screen.getByText("Don't have an account?")
  
  expect(someNotes).toBeInTheDocument();
  expect(forgotPass).toBeInTheDocument();
  expect(dontHave).toBeInTheDocument();

});
