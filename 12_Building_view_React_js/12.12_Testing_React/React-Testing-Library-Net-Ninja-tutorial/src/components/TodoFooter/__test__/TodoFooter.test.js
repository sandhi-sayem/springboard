import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {

    // describe('Function 1', () => {
    it('should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    // })

    // describe('Functionality 2', () => {
    it('should render "task" when the number of incomplete tasks is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    // })
})

// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeTruthy;
// });

// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible();
// });

// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML('p');
// });


// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement).toHaveTextContent('1 task left');
// });

// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).not.toBeVisible();
// });


// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement).not.toBeFalsy();
// });


// it('should render "task" when the number of incomplete tasks is one', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement.textContent).toBe('1 task left');
// });