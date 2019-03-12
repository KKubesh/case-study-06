import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MockForTestProductView from '../components/mock_test_components/MockForTestProductView';

// TEST MOCKED UP TO BE RUN WITHOUT REDUX
// SEE ProductView.test.js FOR NOTES

afterEach(cleanup);

test('<MockForTestProductView />', () => {
    const { getByTestId } = render(<MockForTestProductView />);
    expect(getByTestId('product-view')).toBeTruthy();
})

// NEED TO LOOK FURTHER INTO UNDERSTANDING HOW TO CHANGE OR MOCK STATE AND FUNCTIONS TO FINISH TEST

// const mockIsDesktop = ***STATE OF ISDESKTOP***
// const mockResizeEvent = ***FUNCTION OF RESIZING***

// test('<MockForTestProductView check state of isDesktop/>', () => {
//     FIRE mockResizeEvent AND RETURN 740px window.innerWidth
//     EXPECT isDesktop TO RETURN false
//     EXPECT enlarge.png TO RETURN false
//     FIRE mockResizeEvent AND RETURN 1366px window.innerWidth
//     EXPECT isDesktop TO RETURN true
//     EXPECT enlarge.png TO RETURN true
// })