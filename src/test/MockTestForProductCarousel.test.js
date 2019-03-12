import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MockForTestProductCarousel from '../components/mock_test_components/MockForTestProductCarousel';

// TEST MOCKED UP TO BE RUN WITHOUT REDUX
// SEE ProductView.test.js FOR NOTES

afterEach(cleanup);

const mockFunction = jest.fn();

test('<MockForTestProductCarousel /> confirming on load onclick events', () => {
    const { queryByTestId } = render(<MockForTestProductCarousel nextImage={mockFunction} prevImage={mockFunction} />);
    fireEvent.click(queryByTestId('prev-arrow'));
    fireEvent.click(queryByTestId('next-arrow'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
    
})

// NEED TO LOOK FURTHER INTO UNDERSTANDING HOW TO CHANGE OR MOCK STATE AND FUNCTIONS TO FINISH TEST

// const mockPrevImage = ***FUNCTION OF PREV IMAGE***
// const mockNextImage = ***FUNCTION OF NEXT IMAGE***

// test('<MockForTestProductCarousel /> confirming prev-arrow switch to true based onclick events', () => {
//     const { queryByTestId } = render(<MockForTestProductCarousel nextImage={mockNextImage} prevImage={mockPrevImage} />);
//     fireEvent.click(queryByTestId('prev-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('prev-arrow'));

//     expect(mockPrevImage).toHaveBeenCalledTimes(1);
//     expect(mockNextImage).toHaveBeenCalledTimes(1);
// })

// test('<MockForTestProductCarousel /> confirming prev-arrow back to false based onclick events', () => {
//     const { queryByTestId } = render(<MockForTestProductCarousel nextImage={mockNextImage} prevImage={mockPrevImage} />);
//     fireEvent.click(queryByTestId('prev-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('prev-arrow'));
//     fireEvent.click(queryByTestId('prev-arrow'));

//     expect(mockPrevImage).toHaveBeenCalledTimes(1);
//     expect(mockNextImage).toHaveBeenCalledTimes(1);
// })

// test('<MockForTestProductCarousel /> confirming next-arrow switch to false after 6 onclick events', () => {
//     const { queryByTestId } = render(<MockForTestProductCarousel nextImage={mockNextImage} prevImage={mockPrevImage} />);
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));

//     expect(mockNextImage).toHaveBeenCalledTimes(6);
// })

// test('<MockForTestProductCarousel /> confirming next-arrow switch back to true based onclick events', () => {
//     const { queryByTestId } = render(<MockForTestProductCarousel nextImage={mockNextImage} prevImage={mockPrevImage} />);
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));
//     fireEvent.click(queryByTestId('prev-arrow'));
//     fireEvent.click(queryByTestId('next-arrow'));

//     expect(mockNextImage).toHaveBeenCalledTimes(7);
// })