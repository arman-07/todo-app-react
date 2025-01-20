import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders ToDo List title', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo List/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<App />);
  const input = screen.getByLabelText(/New Task/i);
  const button = screen.getByText(/Add Task/i);

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

  const tasks = screen.getAllByText(/Test Task/i);
  expect(tasks.length).toBeGreaterThan(0);
});