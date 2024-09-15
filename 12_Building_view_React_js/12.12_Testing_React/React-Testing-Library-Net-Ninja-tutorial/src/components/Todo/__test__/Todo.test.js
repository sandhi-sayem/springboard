import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })

}

describe("Todo", () => {
    it('should render input element', () => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping']);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    });

    it('should render multiple elements', () => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping', 'Pet my Bird', 'Wash my Hands']);
        const divElements = screen.getAllByTestId('task-container');
        expect(divElements.length).toBe(3);
    });

    it('tasks should not have completed class when initially rendered', () => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping']);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass('todo-item-active');
    });

    it('tasks should have completed class when clicked', () => {
        render(<MockTodo />);
        addTask(['Go Grocery Shopping']);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass('todo-item-active');
    });
})