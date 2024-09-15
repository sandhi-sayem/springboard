import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}
describe("FollowersList", () => {

    beforeEach(() => {
        console.log('Running before each test');
    })

    beforeAll(() => {
        console.log('Ran once before all tests');
    })

    afterEach(() => {
        console.log('Running after each test');
    })

    afterAll(() => {
        console.log('Ran once after all tests');
    })

    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivelement = await screen.findByTestId('follower-item-0');
        // screen.debug();
        expect(followerDivelement).toBeInTheDocument();
    });

    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivelement = await screen.findByTestId('follower-item-0');
        // screen.debug();
        expect(followerDivelement).toBeInTheDocument();
    });


    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivelement = await screen.findByTestId('follower-item-0');
        // screen.debug();
        expect(followerDivelement).toBeInTheDocument();
    });


    // it('should render multiple follower items', async () => {
    //     render(<MockFollowersList />);
    //     const followerDivelements = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivelements.length).toBe(5);
    // });
})